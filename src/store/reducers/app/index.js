import { handleActions } from 'redux-actions';

import { appLogoutAction, appInitAction, appLoginAction } from 'store/actions/app';

const initialData = {
    auth: null,
};

export default handleActions({
    [appInitAction]: (state, { payload }) => ({
        ...state,
        auth: payload?.auth,
    }),
    [appLogoutAction]: () => ({
        ...initialData,
        auth: false,
    }),
    [appLoginAction]: (state, { payload }) => ({
        ...state,
        // TODO Consider another logic to set auth true
        auth: !!payload?.data?.roles,
    }),
}, initialData);
