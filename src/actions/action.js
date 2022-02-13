export const OPEN_NAVBAR = 'OPEN_NAVBAR';
export const DISPLAY_LOG_BUTTON = 'DISPLAY_LOG_BUTTON';
export const DISPLAY_MOBILE_PROJECT_LIST = 'DISPLAY_MOBILE_PROJECT_LIST';
export const LOG_IN = 'LOG_IN';
export const CREATE_USER = 'CREATE_USER';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SAVE_LOGGED = 'SAVE_LOGGED';
export const SAVE_ERROR_CODE = 'SAVE_ERROR_CODE';
export const DELETE_USER = 'DELETE_USER';

export const openNavbar = () => ({
  type: OPEN_NAVBAR,
});
export const displayLogButton = () => ({
  type: DISPLAY_LOG_BUTTON,
});
export const displayMobileProjectList = () => ({
  type: DISPLAY_MOBILE_PROJECT_LIST,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const createUser = () => ({
  type: CREATE_USER,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveUserData = (token) => ({
  type: SAVE_USER_DATA,
  token: token,
});

export const saveLogged = () => ({
  type: SAVE_LOGGED,
});

export const saveErrorCode = (errorCode) => ({
  type: SAVE_ERROR_CODE,
  errorCode: errorCode,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});
