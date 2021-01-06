import React from 'react';
import { ADMIN, SUPER_ADMIN } from 'settings/constants/roles';
import { routes } from 'settings/navigation/routes';

export default [
    {
        path: routes.admin,
        component: () => <div>Admin page</div>,
        exact: true,
        roles: [SUPER_ADMIN, ADMIN],
    },
];
