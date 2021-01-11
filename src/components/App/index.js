import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useResize } from 'hooks';
import ScreenContext from 'contexts/screen';

import { AppRouter } from 'components';

import connect from './connect';

import 'styles/global.scss';

const App = ({ appInit, isUser, auth }) => {
    const { screen } = useResize();

    useEffect(appInit, [appInit]);

    if (auth && !isUser) {
        return 'loading'; // TODO: return spiner
    }

    return (
        <ScreenContext.Provider value={{ screen }}>
            <Router>
                <AppRouter />
            </Router>
        </ScreenContext.Provider>
    );
};

App.propTypes = {
    isUser: PropTypes.bool,
    auth: PropTypes.bool,
    appInit: PropTypes.func.isRequired,
};

App.defaultProps = {
    auth: false,
    isUser: false,
};

export default connect(App);
