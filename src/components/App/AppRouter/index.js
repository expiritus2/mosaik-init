import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Switch, withRouter, Redirect, Route } from 'react-router-dom';

import routesConfig, { allRoutes } from 'settings/navigation/config';
import { IDLE } from 'settings/constants/apiState';

import connect from './connect';

const AppRouter = ({ user, location }) => {
    const userRoles = useMemo(() => user?.data?.roles || [], [user]);
    const protectedRoutes = useMemo(() => (
        allRoutes.filter((route) => !!route.roles).map(({ path }) => path)
    ), []);

    const isProtectedRoute = useMemo(() => protectedRoutes.some((protectedRoute) => {
        const protectedParts = protectedRoute.split('/');
        const pathnameParts = location.pathname.split('/');

        return protectedParts.every((_, index) => {
            const protectedPart = protectedParts[index];
            const pathnamePart = pathnameParts[index];

            if (pathnamePart && protectedPart.startsWith(':')) {
                return true;
            }

            return protectedPart === pathnamePart;
        });
    }), [location.pathname, protectedRoutes]);

    if (isProtectedRoute) {
        if (user?.meta?.status === 401 || (!user.data && user.state !== IDLE)) {
            return <Redirect to="/login" />;
        }
    }

    return (
        <Switch>
            {routesConfig(userRoles).map(({ path, component, exact }) => (
                <Route key={path} path={path} component={component} exact={exact} />
            ))}
        </Switch>
    );
};

AppRouter.propTypes = {
    user: PropTypes.shape({
        state: PropTypes.string,
        data: PropTypes.shape({
            roles: PropTypes.arrayOf(PropTypes.string),
        }),
        meta: PropTypes.shape({
            status: PropTypes.number,
        }),
    }).isRequired,
    location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(connect(AppRouter));
