import { createSelector } from 'reselect';
import { PENDING, ERROR } from 'settings/constants/api-state';

const localState = ({ app }) => app;

export const isLoading = createSelector(
    localState,
    ({ state }) => state === PENDING,
);

export const isError = createSelector(
    localState,
    ({ state }) => state === ERROR,
);

export const getPosts = createSelector(
    localState,
    ({ data }) => data?.posts || [],
);
