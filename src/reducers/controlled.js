import { 
  CHANGE_INPUT_NEW_PROJECT_NAME,
  CHANGE_INPUT_NEW_PROJECT_DESCRIPTION,
  CHANGE_INPUT_CHANGE_CURRENT_PASSWORD,
  CHANGE_INPUT_CHANGE_NEW_PASSWORD,
  CHANGE_INPUT_CHANGE_CONFIRM_PASSWORD,
  CHANGE_INPUT_SETTINGS_EMAIL,
  CHANGE_INPUT_NEW_TASK_NAME,
  CHANGE_INPUT_NEW_TASK_DESCRIPTION,
  CHANGE_INPUT_NEW_CATEGORY_NAME,
  CHANGE_NEW_TASK_START_DATE,
  CHANGE_NEW_TASK_END_DATE,
  EDIT_EMAIL,
} from 'src/actions/controlledField';

import { HIDE_MODAL } from 'src/actions/modals';

const initialState = {
  inputChangeCurrentPassword: '',
  inputChangeNewPassword: '',
  inputChangeConfirmPassword: '',
  inputChangeProjectName: '',
  inputChangeProjectDescription: '',
  inputTaskName: '',
  inputTaskDescription: '',
  inputNewProjectName: '',
  inputNewProjectDescription: '',
  inputNewCategoryName: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case HIDE_MODAL:
      return {
        ...state,
        inputProjectName: '',
        inputProjectDescription: '',
        inputChangeCurrentPassword: '',
        inputChangeNewPassword: '',
        inputNewProjectName: '',
        inputNewProjectDescription: '',
        inputNewCategoryName: '',
        inputTaskName: '',
        inputTaskDescription: '',
      };
   
    case CHANGE_INPUT_NEW_PROJECT_NAME:
      return {
        ...state,
        inputProjectName: action.inputProjectName,
      };
    case CHANGE_INPUT_NEW_PROJECT_DESCRIPTION:
      return {
        ...state,
        inputProjectDescription: action.inputProjectDescription,
      };
    case CHANGE_INPUT_CHANGE_CURRENT_PASSWORD:
      return {
        ...state,
        inputChangeCurrentPassword: action.inputChangeCurrentPassword,
      };
    case CHANGE_INPUT_CHANGE_NEW_PASSWORD:
      return {
        ...state,
        inputChangeNewPassword: action.inputChangeNewPassword,
      };
    case CHANGE_INPUT_CHANGE_CONFIRM_PASSWORD:
      return {
        ...state,
        inputChangeConfirmPassword: action.inputChangeConfirmPassword,
      };
    case CHANGE_INPUT_SETTINGS_EMAIL:
      return {
        ...state,
        inputSettingsEmail: action.inputSettingsEmail,
      };
    case CHANGE_INPUT_NEW_TASK_NAME:
      return {
        ...state,
        inputTaskName: action.inputTaskName,
      };
    case CHANGE_INPUT_NEW_TASK_DESCRIPTION:
      return {
        ...state,
        inputTaskDescription: action.inputTaskDescription,
      };
    case CHANGE_INPUT_NEW_CATEGORY_NAME:
      return {
        ...state,
        inputNewCategoryName: action.inputNewCategoryName,
      }; 


    case EDIT_EMAIL:
      return {
        ...state,
        inputSettingsEmail: '',
      };

    default:
      return state;
  }
};

export default reducer;
