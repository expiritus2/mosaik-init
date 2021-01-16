import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { Button } from 'components';
import { withAuthUser } from 'hocs';
import connect from './connect';

const SuperUser = ({ logout, history }) => (
    <div>
        <Button title="Logout" onClick={() => logout({ history })} />
        Super User
    </div>
);

SuperUser.propTypes = {
    logout: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
};

export default withAuthUser(connect(SuperUser));
