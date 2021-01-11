import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as toastr from 'toastr';

import { useResize } from 'hooks';
import ScreenContext from 'contexts/screen';

import { AppRouter, AppLoading } from 'components';

import connect from './connect';

import 'toastr/build/toastr.css';
import 'styles/global.scss';

toastr.options = {
    positionClass: 'toast-bottom-right',
};

const App = ({ appInit }) => {
    const { screen } = useResize();

    useEffect(appInit, [appInit]);

    return (
        <ScreenContext.Provider value={{ screen }}>
            <AppLoading>
                <AppRouter />
            </AppLoading>
        </ScreenContext.Provider>
    );
};

App.propTypes = {
    appInit: PropTypes.func.isRequired,
};

export default connect(App);
