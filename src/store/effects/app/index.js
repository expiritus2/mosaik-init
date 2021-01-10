import Api from 'store/effects/core/api';
import { getTestData, getPins } from 'api/app';
import { requestGetTestAction, appLogoutAction, getTestPinsAction } from 'store/actions/app';

export const appLoadEffect = Api.execBase({ action: requestGetTestAction, method: getTestData });

export const appLogoutEffect = () => async (dispatch) => {
    // TODO: something like remove token and so on
    dispatch(appLogoutAction());
};

export const loadPinsEffect = Api.execBase({ action: getTestPinsAction, method: getPins });
