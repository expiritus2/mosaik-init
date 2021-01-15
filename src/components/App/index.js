import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router } from 'react-router-dom';
import { Logger } from 'services';

import { useResize } from 'hooks';
import ScreenContext from 'contexts/screen';

import { AppRouter } from 'components';

import connect from './connect';

import 'styles/global.scss';

const App = ({ user }) => {
    const { screen } = useResize();

    Logger.log(user);
    return (
        <ScreenContext.Provider value={{ screen }}>
            <Router>
                <AppRouter />
            </Router>
        </ScreenContext.Provider>
    );
};

App.propTypes = {
    user: PropTypes.shape({}),
};

App.defaultProps = {
    user: {},
};

export default connect(App);
