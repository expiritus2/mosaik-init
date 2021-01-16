import { NotFound } from 'pages';
import commonRoutesConfig from './common';
import protectedRoutesConfig from './protected';

export const allRoutes = [
    ...commonRoutesConfig,
    ...protectedRoutesConfig,
    { path: '*', component: NotFound },
];

export default allRoutes;
