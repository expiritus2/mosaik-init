import { handleActions } from 'redux-actions';
import { IDLE } from 'settings/constants/api-state';
import { getDataFor } from 'store/helpers';

import { requestGetTestAction, appLogoutAction, appInitAction } from 'store/actions/app';

const initialData = {
    auth: null,
    state: IDLE,
    data: null,
    meta: {},
};

export default handleActions({
    [appInitAction]: (state, { payload }) => ({
        ...state,
        auth: payload?.auth,
    }),
    [requestGetTestAction]: (state, { payload }) => ({
        ...state,
        state: payload.state,
        data: getDataFor('data', payload, initialData),
        meta: getDataFor('meta', payload, initialData),
    }),
    [appLogoutAction]: () => ({
        ...initialData,
        auth: false,
    }),
}, initialData);
