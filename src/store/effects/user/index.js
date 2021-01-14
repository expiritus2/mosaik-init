import Api from 'store/effects/core/api';
import { initUserAction, logoutAction } from 'store/actions/user';
import { getCurrentUser } from 'api/user';
import { LocalStorage } from 'services';

export const logoutEffect = () => (dispatch) => {
    LocalStorage.removeToken();

    dispatch(logoutAction());
};

export const userInitEffect = Api.execResult({ action: initUserAction, method: getCurrentUser });
