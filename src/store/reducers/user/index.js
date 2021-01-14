import { handleActions } from 'redux-actions';
import { cloneDeep } from 'lodash-es';
import { initUserAction, logoutAction } from 'store/actions/user';
import { IDLE } from 'settings/constants/apiState';
import { getDataFor } from 'store/helpers';

const initialData = {
    state: IDLE,
    data: null,
    meta: {},
};

export default handleActions({
    [initUserAction]: (state, { payload }) => ({
        state: payload.state,
        data: getDataFor('data', payload, initialData),
        meta: getDataFor('meta', payload, initialData),
    }),
    [logoutAction]: () => cloneDeep(initialData),
}, initialData);
