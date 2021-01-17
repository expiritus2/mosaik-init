import Api from 'store/effects/core/api';
import { initUserAction, logoutAction, loginAction } from 'store/actions/user';
import { LocalStorage } from 'services';
import { getCurrentUser, login } from 'api/user';
import { routes } from 'settings/navigation/routes';

export const logoutEffect = ({ history }) => (dispatch) => {
    LocalStorage.removeToken();

    dispatch(logoutAction());

    history.push(routes.login);
};

export const getCurrentUserEffect = Api.execBase({ action: initUserAction, method: getCurrentUser });
export const loginEffect = Api.execBase({ action: loginAction, method: login });
