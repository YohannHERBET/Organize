import {
  HIDE_MODAL,
  SHOW_NEW_PROJECT_MODAL,
  SHOW_EDIT_PROJECT_MODAL,
  SHOW_DELETE_PROJECT_MODAL,
  SHOW_NEW_TASK_MODAL,
  SHOW_EDIT_TASK_MODAL,
  SHOW_DELETE_TASK_MODAL,
  SHOW_NEW_CATEGORY_MODAL,
  SHOW_DELETE_CATEGORY_MODAL,
  SHOW_CHANGE_PASSWORD_MODAL,
  SHOW_DELETE_ACCOUNT_MODAL,
  SHOW_EDIT_CATEGORY_MODAL,
} from 'src/actions/modals';


const initialState = {

  displayNewProjectModal: false,
  displayEditProjectModal: false,
  displayDeleteProjectModal: false,
  displayNewCategoryModal: false,
  displayDeleteCategoryModal: false,
  displayNewTaskModal: false,
  displayEdiTaskModal: false,
  displayDeleteTaskModal: false,
  displayChangePasswordModal: false,
  displayDeleteAccountModal: false,
  displayEditCategoryModal: false,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case HIDE_MODAL:
      return {
        ...state,
        displayNewProjectModal: false,
        displayEditProjectModal: false,
        displayDeleteProjectModal: false,
        displayNewCategoryModal: false,
        displayDeleteCategoryModal: false,
        displayNewTaskModal: false,
        displayEditTaskModal: false,
        displayDeleteTaskModal: false,
        displayChangePasswordModal: false,
        displayDeleteAccountModal: false,
        displayEditCategoryModal: false,
      };
    case SHOW_NEW_PROJECT_MODAL:
      return {
        ...state,
        displayNewProjectModal: true,
      };
    case SHOW_EDIT_PROJECT_MODAL:
      return {
        ...state,
        displayEditProjectModal: true,
      };
    case SHOW_DELETE_PROJECT_MODAL:
      return {
        ...state,
        displayDeleteProjectModal: true,
      };
    case SHOW_NEW_CATEGORY_MODAL:
      return {
        ...state,
        displayNewCategoryModal: true,
      };
    case SHOW_DELETE_CATEGORY_MODAL:
      return {
        ...state,
        displayDeleteCategoryModal: true,
      }  
    case SHOW_NEW_TASK_MODAL:
      return {
        ...state,
        displayNewTaskModal: true,
      };
    case SHOW_EDIT_TASK_MODAL:
      return {
        ...state,
        displayEditTaskModal: true,
      };
    case SHOW_DELETE_TASK_MODAL:
      return {
        ...state,
        displayDeleteTaskModal: true,
      };
    case SHOW_CHANGE_PASSWORD_MODAL:
      return {
        ...state,
        displayChangePasswordModal: true,
      };
    case SHOW_DELETE_ACCOUNT_MODAL:
      return {
        ...state,
        displayDeleteAccountModal: true,
      };
    case SHOW_EDIT_CATEGORY_MODAL:
    return {
      ...state,
      displayEditCategoryModal: true,
    };
    

    default:
      return state;
  }
};

export default reducer;
