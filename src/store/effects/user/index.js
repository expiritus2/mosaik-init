import Api from 'store/effects/core/api';
import { initUserAction, logoutAction, loginAction } from 'store/actions/user';
import { LocalStorage } from 'services';
import { getCurrentUser, login } from 'api/user';

export const logoutEffect = (cfg = {}) => (dispatch) => {
    const { history } = cfg;
    LocalStorage.removeToken();

    dispatch(logoutAction());
    history?.push('/');
};

export const getCurrentUserEffect = Api.execBase({ action: initUserAction, method: getCurrentUser });
export const loginEffect = Api.execBase({ action: loginAction, method: login });
