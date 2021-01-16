import React from 'react';
import { IDLE, PENDING, READY } from 'settings/constants/apiState';
import { Wrapper } from 'components';
import { Redirect } from 'react-router-dom';

import { routes } from 'settings/navigation/routes';

import connect from './connect';

import styles from './styles.module.scss';

export default (Component) => {
    const withAuthUser = ({ routeRoles, user, getCurrentUser, ...props }) => {
        const isUserNotInitialised = user.state === IDLE;
        const isPendingRequest = user.state === PENDING;
        const isNotAuthorized = user.meta.status === 401;

        const userRoles = user.data?.roles || [];
        const isRouteNotIncludesUserRoles = routeRoles.every((routeRole) => !userRoles.includes(routeRole));
        const userLoggedOut = user.state === READY && !user.data;

        if (isUserNotInitialised) {
            getCurrentUser();
        }

        if (isPendingRequest) {
            return <Wrapper className={styles.wrapper} isPending={isPendingRequest} />;
        }

        if (isNotAuthorized || (user.state === READY && isRouteNotIncludesUserRoles)) {
            return <Redirect to={routes.login} />;
        }

        if (userLoggedOut) {
            return <Redirect to={routes.index} />;
        }

        return <Component user={user} {...props} />;
    };

    return connect(withAuthUser);
};
