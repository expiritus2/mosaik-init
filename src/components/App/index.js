import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router } from 'react-router-dom';

import { useResize } from 'hooks';
import ScreenContext from 'contexts/screen';

import { AppRouter } from 'components';

import connect from './connect';

import 'styles/global.scss';

const App = ({ initialUser, userInit }) => {
    const { screen } = useResize();

    useEffect(() => userInit(initialUser), [userInit, initialUser]);

    return (
        <ScreenContext.Provider value={{ screen }}>
            <Router>
                <AppRouter initialUser={initialUser} />
            </Router>
        </ScreenContext.Provider>
    );
};

App.propTypes = {
    initialUser: PropTypes.shape({
        data: PropTypes.shape({}),
        err: PropTypes.shape({}),
    }).isRequired,
    userInit: PropTypes.func.isRequired,
};

export default connect(App);
