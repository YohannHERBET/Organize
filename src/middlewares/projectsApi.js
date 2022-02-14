import axios from 'axios';

import { SEND_CATEGORY, SEND_TASK, EDIT_TASK, EDIT_PROJECT, EDIT_CATEGORY, EDIT_TASK_POST, EDIT_PASSWORD, EDIT_EMAIL } from 'src/actions/controlledField';

import {LOG_IN, CREATE_USER, DELETE_USER, saveUserData, saveLogged, saveErrorCode } from 'src/actions/action';

import { FETCH_DATA, FETCH_FILTRED_TASK, saveData, FETCH_TASK, saveTask, DELETE_PROJECT, DELETE_CATEGORY, DELETE_TASK, FETCH_PROJECT, saveProject, FETCH_CATEGORY, saveCategory, saveFiltredTask } from '../actions/projects';

import { SEND_PROJECT } from 'src/actions/controlledField';

const middleware = (store) => (next) => (action) => {
  const newProjectDatas = {
    title: store.getState().controlled.inputProjectName,
    descriptionProject: store.getState().controlled.inputProjectDescription,
  };

  const newCategoryData = {
    nameCategory: store.getState().controlled.inputNewCategoryName,
    project: store.getState().reducer.currentProjectId,
  };

  const newTaskData = {
    name: store.getState().controlled.inputTaskName,
    descritpionTask: store.getState().controlled.inputTaskDescription,
    category: store.getState().reducer.currentCategoryId,
    priority: parseInt(store.getState().reducer.priority),
    startingDate: store.getState().reducer.NewTaskStartDate,
    dueDate:store.getState().reducer.NewTaskEndDate,
  };

  const editTaskData = {
    name: store.getState().reducer.inputEditTaskName,
    descritpionTask: store.getState().reducer.inputEditTaskDescription,
    priority: parseInt(store.getState().reducer.priority),
    category: parseInt(store.getState().reducer.categorySelect),
    startingDate: store.getState().reducer.EditTaskStartDate,
    dueDate:store.getState().reducer.EditTaskEndDate,
  };

  const editPasswordData = {
    password: store.getState().controlled.inputChangeConfirmPassword,
    user: store.getState().reducer.userId,
    email: '',
  };

  const editEmailData = {
    password: '',
    user: store.getState().reducer.userId,
    email: store.getState().controlled.inputSettingsEmail,
  };

  const editProjectData = {
    title: store.getState().reducer.inputChangeProjectName,
    descriptionProject: store.getState().reducer.inputChangeProjectDescription,
  };

  const editCategoryData = {
    nameCategory: store.getState().reducer.valueEditCategoryName,
  };

  
  const deleteProjectUrl = `http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/project/${store.getState().reducer.currentProjectId}`;
 
  const deleteCategoryUrl = `http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/category/${store.getState().reducer.currentCategoryId}`;
  const deleteTaskUrl = `http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/task/${store.getState().reducer.currentTaskId}`;
  const getTaskUrl = `http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/task/${store.getState().reducer.currentTaskId}`;
  const editTaskUrl = `http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/task/${store.getState().reducer.currentTaskId}`;
  const getProjectUrl = `http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/project/${store.getState().reducer.currentProjectId}`;
  const editProjectUrl = `http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/project/${store.getState().reducer.currentProjectId}`;
  const getCategoryUrl = `http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/category/${store.getState().reducer.currentCategoryId}`;
  const editCategoryUrl = `http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/category/${store.getState().reducer.currentCategoryId}`;
  const editPassword = `http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/user/${store.getState().reducer.userId}`;

  switch (action.type) {
    case LOG_IN:
      axios.post(
        'http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/login_check',
        {
          username: store.getState().reducer.changeInputLoginEmail,
          password: store.getState().reducer.changeInputLoginPassword,
        },
      )
        .then((response) => {
          const newAction = saveUserData(
            response.data.token,
          );
          store.dispatch(newAction);
          if (store.getState().reducer.token !== '') {
            store.dispatch(saveLogged());
          }
        })

        .catch((error) => {
          console.warn(error.response.data.code);
          store.dispatch(saveErrorCode(error.response.data.code));
        });

      break;

    case CREATE_USER:
      axios.post(
        'http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/user',
        
        {
          email: store.getState().reducer.inputSigninEmail,
          password: store.getState().reducer.inputSigninPassword,
        },
      )
        .catch((error) => {
          console.warn(error.response.status);
          store.dispatch(saveErrorCode(error.response.status));
        });

      break;

    case FETCH_DATA:
      axios.get('http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/project',
        {
          headers: {
            Authorization: `Bearer ${store.getState().reducer.token}`,
          },
        },
      ).then((response) => {
        const projects = response.data[1];
        const userData = response.data[0][0].id;
        const userEmail = response.data[0][0].email;
        store.dispatch(saveData(projects, userData, userEmail));
      })

      break;

      case FETCH_FILTRED_TASK:
      axios.get('http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/task',
        {
          headers: {
            Authorization: `Bearer ${store.getState().reducer.token}`,
          },
        },
      ).then((response) => {
        const taskData = response.data;
        store.dispatch(saveFiltredTask(taskData));
      })

      break;

    case FETCH_TASK:
      axios.get(getTaskUrl,
        {
          headers: {
            Authorization: `Bearer ${store.getState().reducer.token}`,
          },
        },
      ).then((response) => {
        const task = response.data;
        store.dispatch(saveTask(task));
      })

      break;

    case FETCH_PROJECT:
      axios.get(getProjectUrl,
        {
          headers: {
            Authorization: `Bearer ${store.getState().reducer.token}`,
          },
        },
      ).then((response) => {
        const project = response.data;
        store.dispatch(saveProject(project));
      })
        .catch((error) => {
        });

      break;

    case FETCH_CATEGORY:
      axios.get(getCategoryUrl,
        {
          headers: {
            Authorization: `Bearer ${store.getState().reducer.token}`,
          },
        },
      ).then((response) => {
        const category = response.data;
        store.dispatch(saveCategory(category));
      })

      break;

    case SEND_PROJECT:
      axios.post('http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/project', newProjectDatas, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      )
        .catch((error) => {
          console.error(error);
        });

      break;

    case SEND_CATEGORY:
      axios.post('http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/category', newCategoryData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      }
      ).catch((error) => {
        console.error(error);
      });

      break;

    case SEND_TASK:
      axios.post('http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/task', newTaskData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.error(error);
      });

      break;

    case DELETE_USER:
      axios.delete('http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/user', {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.error(error);
      });

      break;

    case DELETE_PROJECT:
      axios.delete(deleteProjectUrl, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.error(error);
      });

      break;

    case DELETE_CATEGORY:
      axios.delete(deleteCategoryUrl, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.error(error);
      });

      break;

    case DELETE_TASK:
      axios.delete(deleteTaskUrl, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.error(error);
      });

      break;

    case EDIT_TASK:
      axios.put(editTaskUrl, editTaskData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.error(error);
      });

      break;

    case EDIT_TASK_POST:
      axios.post(`http://yohann-herbet.yohann-herbet.com.mfmj2617.odns.fr/public/api/task`, editTaskData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.error(error);
      });

      break;

    case EDIT_PROJECT:
      axios.put(editProjectUrl, editProjectData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.error(error);
      });

      break;

    case EDIT_CATEGORY:
      axios.put(editCategoryUrl, editCategoryData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.error(error);
      });

      break;

    case EDIT_PASSWORD:
      axios.put(editPassword, editPasswordData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.warn(error);
      });

      break;

    case EDIT_EMAIL:
      axios.put(editPassword, editEmailData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).catch((error) => {
        console.warn(error);
      });

      break;

    default:
  }
  next(action);
};

export default middleware;
