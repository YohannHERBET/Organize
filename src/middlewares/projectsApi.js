import axios from 'axios';

// import { SEND_PROJECT } from 'src/actions/controlledField';
import { SEND_CATEGORY, SEND_TASK, EDIT_TASK, EDIT_PROJECT, EDIT_CATEGORY, EDIT_TASK_POST, EDIT_PASSWORD, EDIT_EMAIL } from 'src/actions/controlledField';

import {LOG_IN, CREATE_USER, DELETE_USER, saveUserData, saveLogged, saveErrorCode } from 'src/actions/action';

import { FETCH_DATA, FETCH_FILTRED_TASK, saveData, FETCH_TASK, saveTask, DELETE_PROJECT, DELETE_CATEGORY, DELETE_TASK, FETCH_PROJECT, saveProject, FETCH_CATEGORY, saveCategory, saveFiltredTask } from '../actions/projects';

import { SEND_PROJECT } from 'src/actions/controlledField';
// import { SEND_CATEGORY } from 'src/actions/controlledField';
// import { SEND_TASK } from '../actions/controlledField';

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

  
  const deleteProjectUrl = `http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/project/${store.getState().reducer.currentProjectId}`;
  // console.log(deleteProjectUrl);
  const deleteCategoryUrl = `http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/category/${store.getState().reducer.currentCategoryId}`;
  const deleteTaskUrl = `http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/task/${store.getState().reducer.currentTaskId}`;
  const getTaskUrl = `http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/task/${store.getState().reducer.currentTaskId}`;
  const editTaskUrl = `http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/task/${store.getState().reducer.currentTaskId}`;
  const getProjectUrl = `http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/project/${store.getState().reducer.currentProjectId}`;
  const editProjectUrl = `http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/project/${store.getState().reducer.currentProjectId}`;
  const getCategoryUrl = `http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/category/${store.getState().reducer.currentCategoryId}`;
  const editCategoryUrl = `http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/category/${store.getState().reducer.currentCategoryId}`;
  const editPassword = `http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/user/${store.getState().reducer.userId}`;

  switch (action.type) {
    case LOG_IN:
      axios.post(
        'http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/login_check',
        // on transmet un objet qui contient les données
        {
          username: store.getState().reducer.changeInputLoginEmail,
          password: store.getState().reducer.changeInputLoginPassword,
        },
      )
        .then((response) => {
          console.log(response);
          // on veut enregistrer les informations de la réponse dans le state
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
        'http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/user',
        // on transmet un objet qui contient les données
        {
          email: store.getState().reducer.inputSigninEmail,
          password: store.getState().reducer.inputSigninPassword,
        },
      )
        .then((response) => {
          console.log(response);
        })

        .catch((error) => {
          console.log(error.response);
          console.warn(error.response.status);
          store.dispatch(saveErrorCode(error.response.status));
        });

      break;

    case FETCH_DATA:
      axios.get('http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/project',
        {
          headers: {
            Authorization: `Bearer ${store.getState().reducer.token}`,
          },
        },
      ).then((response) => {
        console.log(response);
        const projects = response.data[1];
        console.log(projects);
        const userData = response.data[0][0].id;
        console.log(userData);
        const userEmail = response.data[0][0].email;
        console.log(userEmail);
        store.dispatch(saveData(projects, userData, userEmail));
      })
        .catch((error) => {
          console.log(error);
        });

      break;

      case FETCH_FILTRED_TASK:
      axios.get('http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/task',
        {
          headers: {
            Authorization: `Bearer ${store.getState().reducer.token}`,
          },
        },
      ).then((response) => {
        console.log(response);
        const taskData = response.data;
        console.log(taskData);
        store.dispatch(saveFiltredTask(taskData));
      })
        .catch((error) => {
          console.log(error);
        });

      break;

    case FETCH_TASK:
      axios.get(getTaskUrl,
        {
          headers: {
            Authorization: `Bearer ${store.getState().reducer.token}`,
          },
        },
      ).then((response) => {
        console.log(response);
        const task = response.data;
        console.log(task);
        store.dispatch(saveTask(task));
      })
        .catch((error) => {
          console.log(error);
        });

      break;

    case FETCH_PROJECT:
      axios.get(getProjectUrl,
        {
          headers: {
            Authorization: `Bearer ${store.getState().reducer.token}`,
          },
        },
      ).then((response) => {
        console.log(response);
        const project = response.data;
        console.log(project);
        store.dispatch(saveProject(project));
      })
        .catch((error) => {
          console.log(error);
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
        console.log(response);
        const category = response.data;
        console.log(category);
        store.dispatch(saveCategory(category));
      })
        .catch((error) => {
          console.log(error);
        });

      break;

    case SEND_PROJECT:
      axios.post('http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/project', newProjectDatas, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      })
        .catch((error) => {
          console.error(error);
        });

      break;

    case SEND_CATEGORY:
      axios.post('http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/category', newCategoryData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      }
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      break;

    case SEND_TASK:
      axios.post('http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/task', newTaskData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      break;

    case DELETE_USER:
      axios.delete('http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/user', {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      break;

    case DELETE_PROJECT:
      axios.delete(deleteProjectUrl, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      break;

    case DELETE_CATEGORY:
      axios.delete(deleteCategoryUrl, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      break;

    case DELETE_TASK:
      axios.delete(deleteTaskUrl, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      break;

    case EDIT_TASK:
      axios.put(editTaskUrl, editTaskData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      break;

    case EDIT_TASK_POST:
      axios.post(`http://yohannherbet-server.eddi.cloud/projet-O-rganize-back/public/api/task`, editTaskData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      break;

    case EDIT_PROJECT:
      axios.put(editProjectUrl, editProjectData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      break;

    case EDIT_CATEGORY:
      axios.put(editCategoryUrl, editCategoryData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      break;

    case EDIT_PASSWORD:
      axios.put(editPassword, editPasswordData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.warn(error);
      });

      break;

    case EDIT_EMAIL:
      axios.put(editPassword, editEmailData, {
        headers: {
          Authorization: `Bearer ${store.getState().reducer.token}`,
        },
      },
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.warn(error);
      });

      break;

    default:
  }
  next(action);
};

export default middleware;
