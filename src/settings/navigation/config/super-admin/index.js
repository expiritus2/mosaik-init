import React from 'react';
import { routes } from 'settings/navigation/routes';
import { SUPER_ADMIN } from 'settings/constants/roles';

export default [
    {
        path: routes.superAdmin,
        component: () => <div>Super admin page</div>,
        exact: true,
        roles: [SUPER_ADMIN],
    },
];
