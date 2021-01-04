import commonRoutes from './common';
import superAdminRoutes from './super-admin';
import adminRoutes from './admin';
import agentRoutes from './agent';
import userRoutes from './user';

export const routes = {
    ...commonRoutes,
    ...superAdminRoutes,
    ...adminRoutes,
    ...agentRoutes,
    ...userRoutes,
};
