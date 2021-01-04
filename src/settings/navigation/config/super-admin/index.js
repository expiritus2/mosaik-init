import { routes } from 'settings/navigation/routes';
import { SUPER_ADMIN } from 'settings/constants/roles';

export default [
    {
        path: routes.superAdmin,
        component: () => null,
        exact: true,
        roles: [SUPER_ADMIN],
    },
];
