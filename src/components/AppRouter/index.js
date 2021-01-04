import React from 'react';
import { Switch } from 'react-router-dom';

import routesConfig from 'settings/navigation/config';

import AppRoute from './AppRoute';

const AppRouter = () => (
    <Switch>
        {routesConfig.map((route) => (
            <AppRoute key={route.path} {...route} />
        ))}
    </Switch>
);

export default AppRouter;
