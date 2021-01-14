import { handleActions } from 'redux-actions';
import { IDLE } from 'settings/constants/api-state';
import { getDataFor } from 'store/helpers';

import {
    requestGetTestAction,
    appLogoutAction,
    appInitAction,
    appOpenSearchDrawerAction,
    appOpenMenuDrawerAction,
} from 'store/actions/app';

const initialData = {
    auth: null,
    isSearchDrawerOpen: false,
    isMenuDrawerOpen: false,
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
    [appLogoutAction]: () => initialData,
    [appOpenSearchDrawerAction]: (state, { payload }) => ({
        ...state,
        isSearchDrawerOpen: payload.isOpen,
    }),
    [appOpenMenuDrawerAction]: (state, { payload }) => ({
        ...state,
        isMenuDrawerOpen: payload.isOpen,
    }),
}, initialData);
