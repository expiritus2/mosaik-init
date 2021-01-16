import Api from 'store/effects/core/api';
import { initUserAction, logoutAction } from 'store/actions/user';
import { LocalStorage } from 'services';
import { getCurrentUser } from 'api/user';

export const logoutEffect = (cfg = {}) => (dispatch) => {
    const { history } = cfg;
    LocalStorage.removeToken();

    dispatch(logoutAction());
    history?.push('/');
};

export const getCurrentUserEffect = Api.execBase({ action: initUserAction, method: getCurrentUser });
