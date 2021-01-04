import { SUPER_ADMIN, ADMIN, AGENT, USER } from '../../constants/roles';

import commonRoutesConfig from './common';
import superAdminRoutesConfig from './super-admin';
import adminRoutesConfig from './admin';
import agentRoutesConfig from './agent';
import userRoutesConfig from './user';
import notFound from './not-found';

const navConfig = (role) => {
    const routes = [...commonRoutesConfig];

    if (role === SUPER_ADMIN) {
        routes.push(...superAdminRoutesConfig, ...adminRoutesConfig, ...agentRoutesConfig, ...userRoutesConfig);
    } else if (role === ADMIN) {
        routes.push(...adminRoutesConfig, ...userRoutesConfig);
    } else if (role === AGENT) {
        routes.push(...agentRoutesConfig);
    } else if (role === USER) {
        routes.push(...userRoutesConfig);
    }

    return [...routes, ...notFound];
};

export default navConfig;
