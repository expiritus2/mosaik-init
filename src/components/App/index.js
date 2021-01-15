import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useResize } from 'hooks';
import ScreenContext from 'contexts/screen';

import { AppRouter, AppLoading } from 'components';
import MenuDrawer from './MenuDrawer';

import connect from './connect';

import 'styles/global.scss';

const App = ({ appInit }) => {
    const { screen } = useResize();

    useEffect(appInit, [appInit]);

    return (
        <ScreenContext.Provider value={{ screen }}>
            <AppLoading>
                <Router>
                    <AppRouter />
                </Router>
            </AppLoading>
            <MenuDrawer />
        </ScreenContext.Provider>
    );
};

App.propTypes = {
    appInit: PropTypes.func.isRequired,
};

export default connect(App);
