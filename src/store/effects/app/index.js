import Api from 'store/effects/core/api';
import { getTestData } from 'api/app';
import { requestGetTestAction, appLogoutAction } from 'store/actions/app';

export const appLoadEffect = Api.execBase({ action: requestGetTestAction, method: getTestData });

export const appLogoutEffect = () => async (dispatch) => {
    // TODO: something like remove token and so on
    dispatch(appLogoutAction());
};
