import { createAction } from 'redux-actions';

export const initUserAction = createAction('REQUEST/POST_INIT_USER');
export const loginAction = createAction('REQUEST/POST_LOGIN');
export const logoutAction = createAction('USER/LOGOUT');
