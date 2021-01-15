import Api from 'store/effects/core/api';
import { getTestData, getPins } from 'api/app';
import { requestGetTestAction, appLogoutAction, getTestPinsAction, appInitAction, appOpenSearchDrawerAction,
    appOpenMenuDrawerAction } from 'store/actions/app';
import { userGetDataEffect } from 'store/effects/user';
import { LocalStorage } from 'services';

export const appLoadEffect = Api.execBase({ action: requestGetTestAction, method: getTestData });

export const appLogoutEffect = () => async (dispatch) => {
    LocalStorage.removeToken();

    dispatch(appLogoutAction());

    // TODO: redirect to main page
};

export const appLoginEffect = () => async () => {
    // TODO: get form login/pass from params, send request
    // TODO: temp set random token for tests
    LocalStorage.setToken('mockAccessToken');
};

export const appInitEffect = () => async (dispatch) => {
    try {
        const isToken = !!LocalStorage.getToken();

        if (!isToken) {
            dispatch(appInitAction({ auth: false }));
            return;
        }

        await dispatch(userGetDataEffect());

        dispatch(appInitAction({ auth: true }));
    } catch (err) {
        if (err?.response?.status === 401) {
            // TODO: redirect on login page
            console.log('401: redirect to login page');
            // TODO: show wrong token norifications
        }

        // TODO: redirect to login page
        dispatch(appInitAction({ auth: false }));
    }
};

export const openSearchDrawerEffect = ({ isOpen }) => (dispatch) => {
    dispatch(appOpenSearchDrawerAction({ isOpen }));
};

export const openMenuDrawerEffect = ({ isOpen }) => (dispatch) => {
    dispatch(appOpenMenuDrawerAction({ isOpen }));
};

export const loadPinsEffect = Api.execBase({ action: getTestPinsAction, method: getPins });
