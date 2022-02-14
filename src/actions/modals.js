// HIDE_MODAL (Valid for all modals)
export const HIDE_MODAL = 'HIDE_MODAL';
export const hideModal = () => ({
  type: HIDE_MODAL,
});

// PROJECT MODALS
export const SHOW_NEW_PROJECT_MODAL = 'SHOW_NEW_PROJECT_MODAL';
export const SHOW_EDIT_PROJECT_MODAL = 'SHOW_EDIT_PROJECT_MODAL';
export const SHOW_DELETE_PROJECT_MODAL = 'SHOW_DELETE_PROJECT_MODAL';

export const showNewProjectModal = () => ({
  type: SHOW_NEW_PROJECT_MODAL,
});
export const showEditProjectModal = () => ({
  type: SHOW_EDIT_PROJECT_MODAL,
});
export const showDeleteProjectModal = () => ({
  type: SHOW_DELETE_PROJECT_MODAL,
});

// CATEGORY MODALS
export const SHOW_NEW_CATEGORY_MODAL = 'SHOW_NEW_CATEGORY_MODAL';
export const SHOW_DELETE_CATEGORY_MODAL = 'SHOW_DELETE_CATEGORY_MODAL';

export const showNewCategoryModal = () => ({
  type: SHOW_NEW_CATEGORY_MODAL,
});
export const showDeleteCategoryModal = () => ({
  type: SHOW_DELETE_CATEGORY_MODAL,
});

// TASK MODALS
export const SHOW_NEW_TASK_MODAL = 'SHOW_NEW_TASK_MODAL';
export const SHOW_EDIT_TASK_MODAL = 'SHOW_EDIT_TASK_MODAL';
export const SHOW_DELETE_TASK_MODAL = 'SHOW_DELETE_TASK_MODAL';

export const showNewTaskModal = () => ({
  type: SHOW_NEW_TASK_MODAL,
});
export const showEditTaskModal = () => ({
  type: SHOW_EDIT_TASK_MODAL,
});
export const showDeleteTaskModal = () => ({
  type: SHOW_DELETE_TASK_MODAL,
});

// SETTINGS
export const SHOW_CHANGE_PASSWORD_MODAL = 'SHOW_CHANGE_PASSWORD_MODAL';
export const SHOW_DELETE_ACCOUNT_MODAL = 'SHOW_DELETE_ACCOUNT_MODAL';

export const showChangePasswordModal = () => ({
  type: SHOW_CHANGE_PASSWORD_MODAL,
});

export const showDeleteAccountModal = () => ({
  type: SHOW_DELETE_ACCOUNT_MODAL,
});

export const SHOW_EDIT_CATEGORY_MODAL = 'SHOW_EDIT_CATEGORY_MODAL';

export const showEditCategoryModal = () => ({
  type: SHOW_EDIT_CATEGORY_MODAL,
});
