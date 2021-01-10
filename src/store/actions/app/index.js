import { createAction } from 'redux-actions';

export const requestGetTestAction = createAction('REQUEST/GET_TEST');
export const requestPutTestAction = createAction('REQUEST/PUT_TEST');
export const requestPostTestAction = createAction('REQUEST/POST_TEST');

export const appLogoutAction = createAction('APP/LOGOUT');
export const appStoreSmthToStoreAction = createAction('APP/STORE_SMTH_TO_STORE');
export const getTestPinsAction = createAction('GET_TEST_PINS_ACTION');
