import { initUserAction, logoutAction } from 'store/actions/user';
import { LocalStorage } from 'services';

export const logoutEffect = (cfg = {}) => (dispatch) => {
    const { history } = cfg;
    LocalStorage.removeToken();

    dispatch(logoutAction());
    history?.push('/');
};

export const userInitEffect = (user) => (dispatch) => {
    dispatch(initUserAction(user));
};
