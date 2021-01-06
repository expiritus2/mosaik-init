import commonRoutesConfig from './common';
import superAdminRoutesConfig from './super-admin';
import adminRoutesConfig from './admin';
import agentRoutesConfig from './agent';
import userRoutesConfig from './user';
import notFound from './not-found';

const navConfig = [
    ...commonRoutesConfig,
    ...superAdminRoutesConfig,
    ...adminRoutesConfig,
    ...agentRoutesConfig,
    ...userRoutesConfig,
    ...notFound,
];

export default navConfig;
