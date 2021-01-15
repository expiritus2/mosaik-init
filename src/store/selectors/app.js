import { createSelector } from 'reselect';
import { PENDING, ERROR } from 'settings/constants/api-state';

const localState = ({ app }) => app;

export const isPendingPostsSelector = createSelector(
    localState,
    ({ state }) => state === PENDING,
);

export const isErrorLoadingPostsSelector = createSelector(
    localState,
    ({ state }) => state === ERROR,
);

export const getPostsSelector = createSelector(
    localState,
    ({ data }) => data?.posts || [],
);

export const getIsAuthLoading = createSelector(
    localState,
    ({ auth }) => auth === null,
);
