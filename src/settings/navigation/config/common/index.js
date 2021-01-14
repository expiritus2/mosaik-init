import { routes } from 'settings/navigation/routes';
import { Main, Login } from 'pages';

export default [
    { path: routes.index, component: Main, exact: true },
    { path: routes.login, component: Login, exact: true },
];
