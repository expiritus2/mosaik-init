import Api from 'store/effects/core/api';
import { getTestData, getPins } from 'api/app';
import { requestGetTestAction, appLogoutAction, getTestPinsAction, appInitAction } from 'store/actions/app';
import { Auth } from 'services';

export const appLoadEffect = Api.execBase({ action: requestGetTestAction, method: getTestData });

export const appLogoutEffect = () => async (dispatch) => {
    // TODO: something like remove token and so on
    dispatch(appLogoutAction());
};

export const appInitEffect = () => async (dispatch) => {
    const areTokens = await Auth.isAuthData();

    if (!areTokens) {
        dispatch(appInitAction({ auth: false }));
        return;
    }

    // TODO: request userData with role and store this role!

    // TODO: redirect on login page if 401
    dispatch(appInitAction({ auth: true }));
};

export const loadPinsEffect = Api.execBase({ action: getTestPinsAction, method: getPins });
