import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import routesConfig from 'settings/navigation/config';

import connect from './connect';

const AppRouter = ({ userRoles }) => (
    <Switch>
        {routesConfig(userRoles).map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
        ))}
    </Switch>
);

AppRouter.propTypes = {
    userRoles: PropTypes.arrayOf(PropTypes.string),
    meta: PropTypes.shape({}).isRequired,
};

AppRouter.defaultProps = {
    userRoles: [],
};

export default connect(AppRouter);
