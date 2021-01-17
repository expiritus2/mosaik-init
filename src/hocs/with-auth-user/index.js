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
        const isPendingRequest = user.state === PENDING;
        const isError = user.state === ERROR;
        const isUserRequestReady = user.state === READY;
        const notAuthorized = user.meta.status === 401;
        const forbidden = user.meta.status === 403;

        const userRoles = user.data?.roles || [];
        const isRouteNotIncludesUserRoles = routeRoles.every((routeRole) => !userRoles.includes(routeRole));
        const userLoggedOut = user.state === READY && (!user.data || !Object.keys(user?.data || {}).length);

        useEffect(() => {
            if (isUserNotInitialised) {
                getCurrentUser();
            }
        }, []); // eslint-disable-line

        if (isUserNotInitialised) return null;

        if (isUserRequestReady && isRouteNotIncludesUserRoles) {
            return <Forbidden />;
        }

        if (userLoggedOut) {
            return <Redirect to={routes.index} />;
        }

        if (isError) {
            if (notAuthorized) {
                return <Redirect to={routes.login} />;
            }
            if (forbidden) {
                return <Forbidden />;
            }
        }

        return <Component {...props} isPendingRequest={isPendingRequest} user={user} />;
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
