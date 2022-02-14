export const CHANGE_INPUT_NEW_PROJECT_NAME = 'CHANGE_INPUT_NEW_PROJECT_NAME';
export const CHANGE_INPUT_NEW_PROJECT_DESCRIPTION = 'CHANGE_INPUT_NEW_PROJECT_DESCRIPTION';
export const CHANGE_INPUT_LOGIN_EMAIL = 'CHANGE_INPUT_LOGIN_EMAIL';
export const CHANGE_INPUT_LOGIN_PASSWORD = 'CHANGE_INPUT_LOGIN_PASSWORD';
export const CHANGE_INPUT_SIGNIN_EMAIL = 'CHANGE_INPUT_SIGNIN_EMAIL';
export const CHANGE_INPUT_SIGNIN_PASSWORD = 'CHANGE_INPUT_SIGNIN_PASSWORD';
export const CHANGE_INPUT_CHANGE_CURRENT_PASSWORD = 'CHANGE_INPUT_CHANGE_CURRENT_PASSWORD';
export const CHANGE_INPUT_CHANGE_NEW_PASSWORD = 'CHANGE_INPUT_CHANGE_NEW_PASSWORD';
export const CHANGE_INPUT_CHANGE_CONFIRM_PASSWORD = 'CHANGE_INPUT_CHANGE_CONFIRM_PASSWORD';
export const CHANGE_INPUT_SETTINGS_EMAIL = 'CHANGE_INPUT_SETTINGS_EMAIL';
export const CHANGE_INPUT_CHANGE_PROJECT_NAME = 'CHANGE_INPUT_CHANGE_PROJECT_NAME';
export const CHANGE_INPUT_CHANGE_PROJECT_DESCRIPTION = 'CHANGE_INPUT_CHANGE_PROJECT_DESCRIPTION';
export const CHANGE_INPUT_CHANGE_TASK_NAME = 'CHANGE_INPUT_CHANGE_TASK_NAME';
export const CHANGE_INPUT_CHANGE_TASK_DESCRIPTION = 'CHANGE_INPUT_CHANGE_TASK_DESCRIPTION';
export const CHANGE_INPUT_NEW_TASK_NAME = 'CHANGE_INPUT_NEW_TASK_NAME';
export const CHANGE_INPUT_NEW_TASK_DESCRIPTION = 'CHANGE_INPUT_NEW_TASK_DESCRIPTION';
export const CHANGE_INPUT_NEW_CATEGORY_NAME = 'CHANGE_INPUT_NEW_CATEGORY_NAME';
export const CHANGE_INPUT_EDIT_CATEGORY_NAME = 'CHANGE_INPUT_EDIT_CATEGORY_NAME';
export const CHANGE_SELECT_NEW_PRIORITY = 'CHANGE_SELECT_NEW_PRIORITY';
export const CHANGE_SELECT_NEW_CATEGORY = 'CHANGE_SELECT_NEW_CATEGORY';
export const CHANGE_NEW_TASK_START_DATE = 'CHANGE_NEW_TASK_START_DATE';
export const CHANGE_NEW_TASK_END_DATE = 'CHANGE_NEW_TASK_END_DATE';
export const CHANGE_EDIT_TASK_START_DATE = 'CHANGE_EDIT_TASK_START_DATE';
export const CHANGE_EDIT_TASK_END_DATE = 'CHANGE_EDIT_TASK_END_DATE';
export const SEND_PROJECT = 'SEND_PROJECT';
export const SEND_CATEGORY = 'SEND_CATEGORY';
export const SEND_TASK = 'SEND_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const EDIT_TASK_POST = 'EDIT_TASK_POST';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const EDIT_PASSWORD = 'EDIT_PASSWORD';
export const EDIT_EMAIL = 'EDIT_EMAIL';

export const changeInputNewProjectName = (changeInputNewProjectName) => ({
  type: CHANGE_INPUT_NEW_PROJECT_NAME,
  inputProjectName: changeInputNewProjectName,
});

export const changeInputNewProjectDescription = (changeInputNewProjectDescription) => ({
  type: CHANGE_INPUT_NEW_PROJECT_DESCRIPTION,
  inputProjectDescription: changeInputNewProjectDescription,
});

export const changeInputLoginEmail = (changeInputLoginEmail) => ({
  type: CHANGE_INPUT_LOGIN_EMAIL,
  changeInputLoginEmail: changeInputLoginEmail,
});

export const changeInputLoginPassword = (changeInputLoginPassword) => ({
  type: CHANGE_INPUT_LOGIN_PASSWORD,
  changeInputLoginPassword: changeInputLoginPassword,
});

export const changeInputSigninEmail = (inputSigninEmail) => ({
  type: CHANGE_INPUT_SIGNIN_EMAIL,
  inputSigninEmail: inputSigninEmail,
});

export const changeInputSigninPassword = (inputSigninPassword) => ({
  type: CHANGE_INPUT_SIGNIN_PASSWORD,
  inputSigninPassword: inputSigninPassword,
});

export const changeInputCurrentPassword = (inputChangeCurrentPassword) => ({
  type: CHANGE_INPUT_CHANGE_CURRENT_PASSWORD,
  inputChangeCurrentPassword: inputChangeCurrentPassword,
});

export const changeInputNewPassword = (inputChangeNewPassword) => ({
  type: CHANGE_INPUT_CHANGE_NEW_PASSWORD,
  inputChangeNewPassword: inputChangeNewPassword,
});

export const changeInputConfirmPassword = (inputChangeConfirmPassword) => ({
  type: CHANGE_INPUT_CHANGE_CONFIRM_PASSWORD,
  inputChangeConfirmPassword: inputChangeConfirmPassword,
});

export const changeSettingsEmail = (inputSettingsEmail) => ({
  type: CHANGE_INPUT_SETTINGS_EMAIL,
  inputSettingsEmail: inputSettingsEmail,
});

export const changeInputChangeProjectName = (inputChangeProjectName) => ({
  type: CHANGE_INPUT_CHANGE_PROJECT_NAME,
  inputChangeProjectName: inputChangeProjectName,
});

export const changeInputChangeProjectDescription = (inputChangeProjectDescription) => ({
  type: CHANGE_INPUT_CHANGE_PROJECT_DESCRIPTION,
  inputChangeProjectDescription: inputChangeProjectDescription,
});

export const changeInputChangeTaskName = (inputEditTaskName) => ({
  type: CHANGE_INPUT_CHANGE_TASK_NAME,
  inputEditTaskName: inputEditTaskName,
});

export const changeInputChangeTaskDescription = (inputEditTaskDescription) => ({
  type: CHANGE_INPUT_CHANGE_TASK_DESCRIPTION,
  inputEditTaskDescription: inputEditTaskDescription,
});

export const changeInputNewTaskName = (inputTaskName) => ({
  type: CHANGE_INPUT_NEW_TASK_NAME,
  inputTaskName: inputTaskName,
});

export const changeInputNewTaskDescription = (inputTaskDescription) => ({
  type: CHANGE_INPUT_NEW_TASK_DESCRIPTION,
  inputTaskDescription: inputTaskDescription,
});

export const changeInputNewCategoryName = (inputNewCategoryName) => ({
  type: CHANGE_INPUT_NEW_CATEGORY_NAME,
  inputNewCategoryName: inputNewCategoryName,
});

export const changeInputEditCategoryName = (valueEditCategoryName) => ({
  type: CHANGE_INPUT_EDIT_CATEGORY_NAME,
  valueEditCategoryName: valueEditCategoryName,
});

export const changeSelectNewPriority = (priority) => ({
  type: CHANGE_SELECT_NEW_PRIORITY,
  priority: priority,
});

export const changeSelectNewCategory = (category) => ({
  type: CHANGE_SELECT_NEW_CATEGORY,
  category: category,
});

export const changeNewTaskStartDate = (NewTaskStartDate) => ({
  type: CHANGE_NEW_TASK_START_DATE,
  NewTaskStartDate: NewTaskStartDate,
});

export const changeNewTaskEndDate = (NewTaskEndDate) => ({
  type: CHANGE_NEW_TASK_END_DATE,
  NewTaskEndDate: NewTaskEndDate,
});

export const changeEditTaskEndDate = (EditTaskEndDate) => ({
  type: CHANGE_EDIT_TASK_END_DATE,
  EditTaskEndDate: EditTaskEndDate,
});

export const changeEditTaskStartDate = (EditTaskStartDate) => ({
  type: CHANGE_EDIT_TASK_START_DATE,
  EditTaskStartDate: EditTaskStartDate,
});

export const sendProject = () => ({
  type: SEND_PROJECT,
});

export const sendCategory = () => ({
  type: SEND_CATEGORY,
});

export const sendTask = () => ({
  type: SEND_TASK,
});

export const editTask = () => ({
  type: EDIT_TASK,
});

export const editTaskPost = () => ({
  type: EDIT_TASK_POST,
});

export const editProject = () => ({
  type: EDIT_PROJECT,
});

export const editCategory = () => ({
  type: EDIT_CATEGORY,
});

export const editPassword = () => ({
  type: EDIT_PASSWORD,
});

export const editEmail = () => ({
  type: EDIT_EMAIL,
});
