import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Switch, withRouter } from 'react-router-dom';

import { Wrapper } from 'components';
import routesConfig from 'settings/navigation/config';
import { IDLE, PENDING } from 'settings/constants/apiState';

import connect from './connect';
import AppRoute from './AppRoute';
import useInitUser from '../hooks/use-init-user';

import styles from './styles.module.scss';

const AppRouter = ({ userData, meta, userInit, userRequestState, location }) => {
    const isProtectedRoute = useInitUser({ userInit, location });

    if (isProtectedRoute && (userRequestState === IDLE || userRequestState === PENDING)) {
        return (
            <Wrapper className={styles.initFlash} isPending />
        );
    }

    return (
        <Switch>
            {routesConfig.map((route) => (
                <AppRoute key={route.path} userRoles={userData?.roles} meta={meta} {...route} />
            ))}
        </Switch>
    );
};

AppRouter.propTypes = {
    userData: PropTypes.shape({
        roles: PropTypes.arrayOf(PropTypes.string),
    }),
    meta: PropTypes.shape({}).isRequired,
    userInit: PropTypes.func.isRequired,
    userRequestState: PropTypes.string.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
};

AppRouter.defaultProps = {
    userData: {},
};

export default withRouter(connect(AppRouter));
