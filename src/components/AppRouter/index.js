import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

import routesConfig from 'settings/navigation/config';

import AppRoute from './AppRoute';
import { SUPER_ADMIN } from '../../settings/constants/roles';

const AppRouter = ({ userRole }) => (
    <Switch>
        {routesConfig.map((route) => (
            <AppRoute key={route.path} userRole={userRole} {...route} />
        ))}
    </Switch>
);

AppRouter.propTypes = {
    userRole: PropTypes.string.isRequired,
};

function mapStateToProps() {
    return {
        userRole: SUPER_ADMIN,
    };
}

export default connect(mapStateToProps)(AppRouter);
