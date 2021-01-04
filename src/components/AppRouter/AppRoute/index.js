import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { Forbidden } from 'pages';

const AppRoute = ({ roles: routeRoles, component, userRole, ...rest }) => {
    let Component = component;

    if (routeRoles && !routeRoles.includes(userRole)) {
        Component = Forbidden;
    }

    return <Route {...rest} component={Component} />;
};

AppRoute.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string),
    userRole: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

AppRoute.defaultProps = {
    roles: undefined,
};

export default AppRoute;
