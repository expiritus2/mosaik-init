import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import * as toastr from 'toastr';

import { useResize } from 'hooks';
import ScreenContext from 'contexts/screen';

import { AppRouter } from 'components';

import 'toastr/build/toastr.css';
import 'styles/global.scss';

toastr.options = {
    positionClass: 'toast-bottom-right',
};

const App = () => {
    const { screen, mobileOS, isMobile } = useResize();

    return (
        <ScreenContext.Provider value={{ screen, mobileOS, isMobile }}>
            <Router>
                <AppRouter />
            </Router>
        </ScreenContext.Provider>
    );
};

export default App;
