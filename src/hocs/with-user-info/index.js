import React from 'react';
import { IDLE, READY, PENDING } from 'settings/constants/apiState';

import connect from './connect';

export default (Component) => {
    const withUserInfo = ({ routeRoles, user, getCurrentUser, ...props }) => {
        const isUserNotInitialised = user.state === IDLE;
        const isUserInitializationPending = user.state === PENDING;

        if (isUserInitializationPending) return null;

        if (isUserNotInitialised) {
            getCurrentUser();
        }

        const isUserNotAuthorized = user.meta.status === 401
            || (user.state === READY && (!user.data || !Object.keys(user?.data || {}).length));

        return <Component user={user} isUserNotAuthorized={isUserNotAuthorized} {...props} />;
    };

    return connect(withUserInfo);
};
