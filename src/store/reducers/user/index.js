import { handleActions } from 'redux-actions';
import { IDLE } from 'settings/constants/apiState';
import { getDataFor } from 'store/helpers';

import { requestGetUserDataAction } from 'store/actions/user';
import { appLoginAction } from 'store/actions/app';

const initialData = {
    state: IDLE,
    data: null,
    meta: {},
};

export default handleActions({
    [requestGetUserDataAction]: (state, { payload }) => ({
        ...state,
        state: payload.state,
        data: getDataFor('data', payload, initialData),
        meta: getDataFor('meta', payload, initialData),
    }),
    [appLoginAction]: (state, { payload }) => ({
        state: payload.state,
        data: getDataFor('data', payload, initialData),
        meta: getDataFor('meta', payload, initialData),
    }),
}, initialData);
