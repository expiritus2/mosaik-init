import React, { useEffect } from 'react';
import { ERROR, IDLE, PENDING, READY } from 'settings/constants/apiState';
import { Redirect } from 'react-router-dom';

import { routes } from 'settings/navigation/routes';
import { Forbidden } from 'components';

import PropTypes from 'prop-types';
import connect from './connect';

export default (Component) => {
    const WithAuthUser = ({ routeRoles, user, getCurrentUser, ...props }) => {
        const isUserNotInitialised = user.state === IDLE;
        const isPendingUserRequest = user.state === PENDING;
        const isUserRequestReady = user.state === READY;
        const isError = user.state === ERROR;

        const notAuthorized = user.meta.status === 401;

        const userRoles = user.data?.roles || [];
        const userHasAccessToRoute = userRoles.some((userRole) => routeRoles.includes(userRole));
        const userLoggedOut = isUserRequestReady && (!user.data || !Object.keys(user?.data || {}).length);

        useEffect(() => {
            if (isUserNotInitialised) {
                getCurrentUser();
            }
        }, []); // eslint-disable-line

        if (isUserNotInitialised) return null;

        if (userLoggedOut) {
            return <Redirect to={routes.login} />;
        }

        if (isUserRequestReady && !userHasAccessToRoute) {
            return <Forbidden />;
            // return <NotFound />;
        }

        if (isError) {
            if (notAuthorized) {
                return <Redirect to={routes.login} />;
            }
        }

        return <Component {...props} isPendingUserRequest={isPendingUserRequest} user={user} />;
    };

    WithAuthUser.propTypes = {
        routeRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
        user: PropTypes.shape({
            state: PropTypes.string,
            data: PropTypes.shape({
                roles: PropTypes.arrayOf(PropTypes.string),
            }),
            meta: PropTypes.shape({
                status: PropTypes.number,
            }),
        }).isRequired,
        getCurrentUser: PropTypes.func.isRequired,
    };

    return connect(WithAuthUser);
};
