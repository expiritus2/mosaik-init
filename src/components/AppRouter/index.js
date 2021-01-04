import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import routesConfig from 'settings/navigation/config';
import connect from './connect';

const AppRouter = ({ userRole }) => (
    <Switch>
        {routesConfig(userRole).map((route) => (
            <Route key={route.path} {...route} />
        ))}
    </Switch>
);

AppRouter.propTypes = {
    userRole: PropTypes.string.isRequired,
};

export default connect(AppRouter);
