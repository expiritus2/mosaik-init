import React from 'react';
import { routes } from 'settings/navigation/routes';
import { SUPER_USER } from 'settings/constants/roles';

export default [
    {
        path: routes.superUser,
        component: () => <div>Super user page</div>,
        exact: true,
        roles: [SUPER_USER],
    },
];
