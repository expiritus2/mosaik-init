import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import routesConfig from 'settings/navigation/config';

import connect from './connect';

const AppRouter = ({ userRole }) => (
    <Switch>
        {routesConfig(userRole).map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
        ))}
    </Switch>
);

AppRouter.propTypes = {
    userRole: PropTypes.string.isRequired,
};

export default connect(AppRouter);
