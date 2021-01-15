import React from 'react';
import { routes } from 'settings/navigation/routes';
import { BROKERAGE_ADMIN, SUPER_USER } from 'settings/constants/roles';
import { SuperUser } from 'pages';

export default [
    {
        path: routes.superUser,
        component: SuperUser,
        exact: true,
        roles: [SUPER_USER],
    },
    {
        path: routes.admin,
        component: () => <div>Brokerage user page</div>,
        exact: true,
        roles: [BROKERAGE_ADMIN],
    },
];
