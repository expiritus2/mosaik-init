import React from 'react';
import { routes } from 'settings/navigation/routes';

export default [
    { path: routes.superAdmin, component: () => <div>Super admin route</div>, exact: true },
];
