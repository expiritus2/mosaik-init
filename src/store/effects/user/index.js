import Api from 'store/effects/core/api';
import { initUserAction, logoutAction } from 'store/actions/user';
import { getCurrentUser } from 'api/user';
import { LocalStorage } from 'services';

export const logoutEffect = ({ history }) => (dispatch) => {
    LocalStorage.removeToken();

    dispatch(logoutAction());
    history.push('/');
};

export const userInitEffect = Api.execResult({ action: initUserAction, method: getCurrentUser });
