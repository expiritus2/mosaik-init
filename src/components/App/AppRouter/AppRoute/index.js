import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { Forbidden } from 'pages';
import { routes } from 'settings/navigation/routes';

const AppRoute = (props) => {
    const { roles: routeRoles, component, userRoles, meta, ...rest } = props;

    const isNotAuthorizedStatus = () => meta.status === 401;
    const isForbiddenStatus = () => meta.status === 403;
    const routeRolesHaveSomeUserRole = () => routeRoles.some((routeRole) => userRoles.includes(routeRole));

    let Component = component;

    if (routeRoles) {
        if ((userRoles.length && !routeRolesHaveSomeUserRole()) || isNotAuthorizedStatus()) {
            Component = () => <Redirect to={routes.login} />;
        }

        if (isForbiddenStatus()) {
            Component = Forbidden;
        }
    }

    return <Route {...rest} component={Component} />;
};

AppRoute.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string),
    userRoles: PropTypes.arrayOf(PropTypes.string),
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    meta: PropTypes.shape({
        status: PropTypes.number,
    }),
};

AppRoute.defaultProps = {
    roles: undefined,
    userRoles: [],
    meta: {},
};

export default AppRoute;
