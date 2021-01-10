import { routes } from 'settings/navigation/routes';
import { BROKERAGE_ADMIN, SUPER_USER } from 'settings/constants/roles';
import React from 'react';

export default [
    {
        path: routes.superUser,
        component: () => <div>Super user page</div>,
        exact: true,
        roles: [SUPER_USER],
    },
    {
        path: routes.admin,
        component: () => <div>Brokerage user page</div>,
        exact: true,
        roles: [SUPER_USER, BROKERAGE_ADMIN],
    },
];
