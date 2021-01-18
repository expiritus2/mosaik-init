import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routesConfig from 'settings/navigation/config';
import { NotFound } from 'pages';

const AppRouter = () => (
    <Switch>
        {routesConfig.map(({ path, Component, exact, roles }) => {
            const routeRoles = roles ? { routeRoles: roles } : {};

            return (
                <Route
                    key={path}
                    path={path}
                    render={(props) => (
                        Component ? <Component {...routeRoles} {...props} /> : <NotFound />
                    )}
                    exact={exact}
                />
            );
        })}
    </Switch>
);

export default AppRouter;
