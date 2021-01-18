import { getState } from 'store';
import { LocalStorage } from 'services';
import { push } from 'connected-react-router';
import { userGetDataEffect } from 'store/effects/user';
import { protectedRoutes } from 'settings/navigation/config';
import { appLogoutAction, appInitAction } from 'store/actions/app';

export const appLogoutEffect = () => async (dispatch) => {
    LocalStorage.removeToken();

    dispatch(appLogoutAction());

    dispatch(push('/login'));
};

export const appInitEffect = () => async (dispatch) => {
    try {
        const isToken = !!LocalStorage.getToken();

        if (!isToken) {
            dispatch(appInitAction({ auth: false }));
            return;
        }

        await dispatch(userGetDataEffect({}, { showError: false }));

        dispatch(appInitAction({ auth: true }));
    } catch (err) {
        if (err?.response?.status === 401) {
            const state = getState();
            const isProtectedRoute = protectedRoutes.includes(state.router.location.pathname);
            if (isProtectedRoute) {
                dispatch(push('/login'));
            }
        }

        dispatch(appInitAction({ auth: false }));
    }
};
