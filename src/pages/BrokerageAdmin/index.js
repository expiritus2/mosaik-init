import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { withAuthUser } from 'hocs';

import { Button } from 'components';
import connect from './connect';

const BrokerageAdmin = ({ logout, history }) => (
    <div>
        <Button title="Logout" onClick={() => logout({ history })} />
        Brokerage Admin
    </div>
);

BrokerageAdmin.propTypes = {
    logout: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
};

export default withAuthUser(connect(BrokerageAdmin));
