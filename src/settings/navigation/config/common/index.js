import { routes } from 'settings/navigation/routes';
import { Main, Login } from 'pages';

export default [
    { path: routes.index, Component: Main, exact: true },
    { path: routes.login, Component: Login, exact: true },
];
