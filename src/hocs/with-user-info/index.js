import React from 'react';
import { IDLE } from 'settings/constants/apiState';

import connect from './connect';

export default (Component) => {
    const withUserInfo = ({ routeRoles, user, getCurrentUser, ...props }) => {
        const isUserNotInitialised = user.state === IDLE;

        if (isUserNotInitialised) {
            getCurrentUser();
        }

        return <Component user={user} {...props} />;
    };

    return connect(withUserInfo);
};
