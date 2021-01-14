import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { useResize } from 'hooks';
import ScreenContext from 'contexts/screen';

import { AppRouter } from 'components';

import connect from './connect';

import 'styles/global.scss';

const App = () => {
    const { screen } = useResize();

    return (
        <ScreenContext.Provider value={{ screen }}>
            <Router>
                <AppRouter />
            </Router>
        </ScreenContext.Provider>
    );
};

export default connect(App);
