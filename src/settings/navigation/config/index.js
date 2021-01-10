import commonRoutesConfig from './common';
import protectedRoutesConfig from './protected';
import { NotFound } from '../../../pages';

const allRoutes = [
    ...commonRoutesConfig,
    ...protectedRoutesConfig,
    { path: '*', component: NotFound },
];

const navConfig = (userRoles) => (
    allRoutes.filter(({ roles: routeRoles }) => {
        if (!routeRoles) return true;
        return routeRoles.some((routeRole) => userRoles.includes(routeRole));
    }));

export default navConfig;
