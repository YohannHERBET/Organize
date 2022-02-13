export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_FILTRED_TASK = 'FETCH_FILTRED_TASK';
export const SAVE_DATA = 'SAVE_DATA';
export const SAVE_FILTED_TASK = 'SAVE_FILTED_TASK';
export const FETCH_TASK = 'FETCH_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const SAVE_PROJECT = 'SAVE_PROJECT';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const SAVE_CATEGORY = 'SAVE_CATEGORY';
export const SAVE_CURRENT_PROJECT_ID = 'SAVE_CURRENT_PROJECT_ID';
export const SAVE_CURRENT_CATEGORY_ID = 'SAVE-CURRENT_CATEGORY_ID';
export const SAVE_CURRENT_TASK_ID = 'SAVE_CURRENT_TASK_ID';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const DELETE_TASK = 'DELETE_TASK';


export const fetchData = () => ({
  type: FETCH_DATA,
});


export const fetchFiltredTask = () => ({
  type: FETCH_FILTRED_TASK,
});


export const saveData = (projectsData, userId, userEmail) => ({

  type: SAVE_DATA,
  projectsData: projectsData,
  userId: userId,
  userEmail: userEmail,
});

export const saveFiltredTask = (tasksData) => ({
  type: SAVE_FILTED_TASK,
  tasksData: tasksData,
});

export const fetchTask = () => ({
  type: FETCH_TASK,
});


export const saveTask = (task) => ({
  type: SAVE_TASK,
  task: task,
});
export const fetchProject = () => ({
  type: FETCH_PROJECT,
});

export const saveProject = (project) => ({
  type: SAVE_PROJECT,
  project: project,
});
export const fetchCategory = () => ({
  type: FETCH_CATEGORY,
});

export const saveCategory = (category) => ({
  type: SAVE_CATEGORY,
  category: category,
});
export const saveCurrentProjectId = (currentProjectId) => ({
  type: SAVE_CURRENT_PROJECT_ID,
  currentProjectId: currentProjectId,
});

export const saveCurrentCategoryId = (currentCategoryId) => ({
  type: SAVE_CURRENT_CATEGORY_ID,
  currentCategoryId: currentCategoryId,
});

export const saveCurrentTaskId = (currentTaskId) => ({
  type: SAVE_CURRENT_TASK_ID,
  currentTaskId: currentTaskId,
});

export const deleteProject = () => ({
  type: DELETE_PROJECT,
});

export const deleteCategory = () => ({
  type: DELETE_CATEGORY,
});

export const deleteTask = () => ({
  type: DELETE_TASK,
});


