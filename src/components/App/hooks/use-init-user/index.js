import { useEffect, useMemo } from 'react';

import routesConfig from 'settings/navigation/config';

const protectedRoutes = routesConfig.filter((route) => !!route.roles).map(({ path }) => path);

const useInitUser = ({ userInit, location: { pathname } }) => {
    const isProtectedRoute = useMemo(() => protectedRoutes.some((protectedRoute) => {
        const protectedParts = protectedRoute.split('/');
        const pathnameParts = pathname.split('/');

        return protectedParts.every((_, index) => {
            const protectedPart = protectedParts[index];
            const pathnamePart = pathnameParts[index];

            if (pathnamePart && protectedPart.startsWith(':')) {
                return true;
            }

            return protectedPart === pathnamePart;
        });
    }), [pathname]);

    useEffect(() => {
        if (isProtectedRoute) {
            userInit();
        }
    }, [userInit, pathname, /*, isProtectedRoute */]); // eslint-disable-line

    return isProtectedRoute;
};

export default useInitUser;
