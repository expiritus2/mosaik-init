import { handleActions } from 'redux-actions';
import { IDLE } from 'settings/constants/api-state';
import { getDataFor } from 'store/helpers';

import { requestGetTestAction, appLogoutAction } from 'store/actions/app';

const initialData = {
    state: IDLE,
    data: null,
    meta: {},
};

export default handleActions({
    [requestGetTestAction]: (state, { payload }) => ({
        ...state,
        state: payload.state,
        data: getDataFor('data', payload, initialData),
        meta: getDataFor('meta', payload, initialData),
    }),
    [appLogoutAction]: () => initialData,
}, initialData);
