import { createSelector } from 'reselect';
import { get } from 'lodash-es';

const localState = ({ user }) => user;

export const getUserRoles = createSelector(
    localState,
    (user) => get(user, ['data', 'roles'], []),
);
