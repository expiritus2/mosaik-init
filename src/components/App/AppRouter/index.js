import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routesConfig from 'settings/navigation/config';

const AppRouter = () => (
    <Switch>
        {routesConfig.map(({ path, Component, exact, roles }) => {
            const routeRoles = roles ? { routeRoles: roles } : {};

            return (
                <Route
                    key={path}
                    path={path}
                    render={(props) => (
                        <Component {...routeRoles} {...props} />
                    )}
                    exact={exact}
                />
            );
        })}
    </Switch>
);

export default AppRouter;
