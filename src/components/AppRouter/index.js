import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import routesConfig from 'settings/navigation/config';
import AppRoute from './AppRoute';

import connect from './connect';

const AppRouter = ({ userRole }) => (
    <Switch>
        {routesConfig.map((route) => (
            <AppRoute key={route.path} userRole={userRole} {...route} />
        ))}
    </Switch>
);

AppRouter.propTypes = {
    userRole: PropTypes.string.isRequired,
};

export default connect(AppRouter);
