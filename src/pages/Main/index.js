import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { Button } from 'components';

import connect from './connect';

const Main = ({ logout, history }) => (
    <div>
        <Button title="Logout" onClick={() => logout({ history })} />
    </div>
);

Main.propTypes = {
    logout: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
};

export default connect(Main);
