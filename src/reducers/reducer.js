import {
  OPEN_NAVBAR,
  DISPLAY_LOG_BUTTON,
  DISPLAY_MOBILE_PROJECT_LIST,
  SAVE_USER_DATA,
  LOGOUT,
  SAVE_LOGGED,
  SAVE_ERROR_CODE,
  LOG_IN,
  DELETE_USER,
} from 'src/actions/action';

import {
  CHANGE_INPUT_LOGIN_EMAIL,
  CHANGE_INPUT_LOGIN_PASSWORD,
  CHANGE_INPUT_SIGNIN_EMAIL,
  CHANGE_INPUT_SIGNIN_PASSWORD,
  CHANGE_INPUT_CHANGE_TASK_NAME,
  CHANGE_INPUT_CHANGE_TASK_DESCRIPTION,
  CHANGE_INPUT_CHANGE_PROJECT_NAME,
  CHANGE_INPUT_CHANGE_PROJECT_DESCRIPTION,
  CHANGE_INPUT_EDIT_CATEGORY_NAME,
  CHANGE_SELECT_NEW_PRIORITY,
  CHANGE_SELECT_NEW_CATEGORY,
  SEND_PROJECT,
  SEND_CATEGORY,
  SEND_TASK,
  EDIT_TASK,
  EDIT_CATEGORY,
  EDIT_PROJECT,
  CHANGE_NEW_TASK_START_DATE,
  CHANGE_NEW_TASK_END_DATE,
  CHANGE_EDIT_TASK_START_DATE,
  CHANGE_EDIT_TASK_END_DATE,
} from 'src/actions/controlledField';

import {
  SAVE_DATA,
  SAVE_FILTED_TASK,
  SAVE_TASK,
  SAVE_PROJECT,
  SAVE_CATEGORY,
  SAVE_CURRENT_PROJECT_ID,
  SAVE_CURRENT_CATEGORY_ID,
  SAVE_CURRENT_TASK_ID,
  FETCH_TASK,
  FETCH_CATEGORY,
  FETCH_PROJECT,
  DELETE_TASK,
  DELETE_CATEGORY,
  DELETE_PROJECT,
} from '../actions/projects';

import { HIDE_MODAL } from 'src/actions/modals';

const initialState = {
  isOpen: false,
  isLogged: false,
  loading: false,
  errorCode: '',
  mobileProjectList: false,
  userId: '',
  userEmail: '',
  projectsData: [],
  tasksData: [],
  project: [],
  task: [],
  category: [],
  token: '',
  changeInputLoginEmail: '',
  changeInputLoginPassword: '',
  inputSigninEmail: '',
  inputSigninPassword: '',
  currentProjectId: '',
  currentCategoryId: '',
  currentTaskId: '',
  inputEditTaskName: '',
  inputEditTaskDescription: '',
  inputProjectName: '',
  inputProjectDescription: '',
  inputChangeProjectName: '',
  inputChangeProjectDescription: '',
  valueEditCategoryName: '',
  inputNewCategoryName: '',
  NewTaskStartDate: null,
  NewTaskEndDate: null,
  EditTaskStartDate: null,
  EditTaskEndDate: null,
  priority: null,
  categorySelect: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case HIDE_MODAL:
      return {
        ...state,
        NewTaskStartDate: null,
        NewTaskEndDate: null,
      };
    case OPEN_NAVBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case LOG_IN:
      return {
        ...state,
        loading: true,
      };
    case DISPLAY_LOG_BUTTON:
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    case DELETE_USER:
      return {
        ...state,
        token: '',
      };
    case DELETE_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        loading: true,
      };
    case SEND_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case SEND_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TASK:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case SEND_TASK:
      return {
        ...state,
        loading: true,
        priority: null,
      };
    case EDIT_TASK:
      return {
        ...state,
        loading: true,
      };
    case EDIT_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case DISPLAY_MOBILE_PROJECT_LIST:
      return {
        ...state,
        mobileProjectList: !state.mobileProjectList,
      };
    case SAVE_DATA:
      return {
        ...state,
        projectsData: action.projectsData,
        userId: action.userId,
        userEmail: action.userEmail,
        loading: false,
      };
    case SAVE_FILTED_TASK:
      return {
        ...state,
        tasksData: action.tasksData,
        loading: false,
      };
    case SAVE_TASK:
      return {
        ...state,
        task: action.task,
        inputEditTaskName: action.task.name,
        inputEditTaskDescription: action.task.descritpionTask,
        EditTaskStartDate: action.task.startingDate,
        EditTaskEndDate: action.task.dueDate,
      };
    case SAVE_PROJECT:
    return {
      ...state,
      project: action.project,
      inputChangeProjectName: action.project.title,
      inputChangeProjectDescription: action.project.descriptionProject,      
    };
    case SAVE_CATEGORY:
    return {
      ...state,
      category: action.category,
      valueEditCategoryName: action.category.name_category,
    };
    case SAVE_CURRENT_PROJECT_ID:
      return {
        ...state,
        currentProjectId: action.currentProjectId,
      };
    case SAVE_CURRENT_CATEGORY_ID:
      return {
        ...state,
        currentCategoryId: action.currentCategoryId,
        categorySelect: action.currentCategoryId,
      };
    case SAVE_CURRENT_TASK_ID:
      return {
        ...state,
        currentTaskId: action.currentTaskId,
      };
    case SAVE_LOGGED:
      return {
        ...state,
        isLogged: true,
      };
    case SAVE_ERROR_CODE:
      return {
        ...state,
        errorCode: action.errorCode,
        loading: false,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        token: action.token,
        changeInputLoginEmail: '',
        changeInputLoginPassword: '',
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        token: '',
        changeInputLoginEmail: '',
        changeInputLoginPassword: '',
      };

    case CHANGE_INPUT_LOGIN_EMAIL:
      return {
        ...state,
        changeInputLoginEmail: action.changeInputLoginEmail,
        errorCode:'',
      };
    case CHANGE_INPUT_LOGIN_PASSWORD:
      return {
        ...state,
        changeInputLoginPassword: action.changeInputLoginPassword,
        errorCode:'',
      };
    case CHANGE_INPUT_SIGNIN_EMAIL:
      return {
        ...state,
        inputSigninEmail: action.inputSigninEmail,
        errorCode:'',
      };   
    case CHANGE_INPUT_SIGNIN_PASSWORD:
      return {
        ...state,
        inputSigninPassword: action.inputSigninPassword,
        errorCode:'',
      }; 
    case CHANGE_INPUT_CHANGE_TASK_NAME:
      return {
      ...state,
      inputEditTaskName: action.inputEditTaskName,
      };       
    case CHANGE_INPUT_CHANGE_TASK_DESCRIPTION:
      return {
      ...state,
      inputEditTaskDescription: action.inputEditTaskDescription,
      }; 
    case CHANGE_INPUT_CHANGE_PROJECT_NAME:
      return {
        ...state,
        inputChangeProjectName: action.inputChangeProjectName,
      };

    case CHANGE_INPUT_CHANGE_PROJECT_DESCRIPTION:
      return {
      ...state,
      inputChangeProjectDescription: action.inputChangeProjectDescription,
      };
    case CHANGE_INPUT_EDIT_CATEGORY_NAME:
      return {
        ...state,
        valueEditCategoryName: action.valueEditCategoryName,
      };
    case CHANGE_SELECT_NEW_PRIORITY:
      return {
        ...state,
        priority: action.priority,
      };
    case CHANGE_SELECT_NEW_CATEGORY:
      return {
        ...state,
        categorySelect:action.category,
      };
    case CHANGE_NEW_TASK_START_DATE:
      return {
      ...state,
      NewTaskStartDate: action.NewTaskStartDate,
      };
    case CHANGE_NEW_TASK_END_DATE:
      return {
      ...state,
      NewTaskEndDate: action.NewTaskEndDate,
      };
    case CHANGE_EDIT_TASK_START_DATE:
      return {
      ...state,
      EditTaskStartDate: action.EditTaskStartDate,
      };
    case CHANGE_EDIT_TASK_END_DATE:
    return {
    ...state,
    EditTaskEndDate: action.EditTaskEndDate,
    };


    default:
      return state;
  }
};

export default reducer;
