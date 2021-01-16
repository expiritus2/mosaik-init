import React from 'react';

import { withUserInfo } from 'hocs';

import Header from './Header';

import connect from './Header/connect';

const Main = () => (
    <div>
        <Header />
    </div>
);

export default withUserInfo(connect(Main));
