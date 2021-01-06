import commonRoutesConfig from './common';
import superAdminRoutesConfig from './super-admin';
import adminRoutesConfig from './admin';
import agentRoutesConfig from './agent';
import userRoutesConfig from './user';
import notFound from './not-found';

const allRoutes = [
    ...commonRoutesConfig,
    ...superAdminRoutesConfig,
    ...adminRoutesConfig,
    ...agentRoutesConfig,
    ...userRoutesConfig,
    ...notFound,
];

const navConfig = (userRole) => (
    allRoutes.filter(({ roles: routeRoles }) => {
        if (!routeRoles) return true;
        return routeRoles.includes(userRole);
    }));

export default navConfig;
