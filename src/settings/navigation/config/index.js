import commonRoutesConfig from './common';
import buyerRoutesConfig from './buyer';
import sellerRoutesConfig from './seller';
import agentRoutesConfig from './agent';
import thirdPartyRoutesConfig from './third-party';
import brokerageAdminRoutesConfig from './brokerage-admin';
import superUserRoutesConfig from './super-user';
import notFound from './not-found';

const allRoutes = [
    ...commonRoutesConfig,
    ...buyerRoutesConfig,
    ...sellerRoutesConfig,
    ...agentRoutesConfig,
    ...thirdPartyRoutesConfig,
    ...brokerageAdminRoutesConfig,
    ...superUserRoutesConfig,
    ...notFound,
];

const navConfig = (userRole) => (
    allRoutes.filter(({ roles: routeRoles }) => {
        if (!routeRoles) return true;
        return routeRoles.includes(userRole);
    }));

export default navConfig;
