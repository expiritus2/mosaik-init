import { NotFound } from 'pages';
import commonRoutesConfig from './common';
import protectedRoutesConfig from './protected';

const allRoutes = [
    ...commonRoutesConfig,
    ...protectedRoutesConfig,
    { path: '*', component: NotFound },
];

const navConfig = (userRoles) => (
    allRoutes.filter(({ roles: routeRoles }) => {
        if (!routeRoles) return true;
        return routeRoles.some((routeRole) => userRoles.includes(routeRole));
    })
);

export const protectedRoutes = allRoutes.filter((route) => !!route.roles).map(({ path }) => path);

export default navConfig;
