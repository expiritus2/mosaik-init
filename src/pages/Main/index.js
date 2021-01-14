import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components';

import connect from './connect';

const Main = ({ logout }) => (
    <div>
        <Button title="Logout" onClick={() => logout()} />
    </div>
);

Main.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default connect(Main);
