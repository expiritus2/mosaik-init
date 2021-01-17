import { routes } from 'settings/navigation/routes';
import { BROKERAGE_ADMIN, SUPER_USER } from 'settings/constants/roles';
import { SuperUser, BrokerageAdmin } from 'pages';

export default [
    {
        path: routes.superUser,
        Component: SuperUser,
        exact: true,
        roles: [SUPER_USER],
    },
    {
        path: routes.admin,
        Component: BrokerageAdmin,
        exact: true,
        roles: [SUPER_USER, BROKERAGE_ADMIN],
    },
];
