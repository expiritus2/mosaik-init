import { routes } from 'settings/navigation/routes';
import { Main } from 'pages';

const mainNavConfig = [
    { path: routes.index, component: Main, exact: true },
];

export default mainNavConfig;
