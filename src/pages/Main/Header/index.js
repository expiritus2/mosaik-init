import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';

import { withUserInfo } from 'hocs';
import { Button } from 'components';
import { routes } from 'settings/navigation/routes';

import connect from './connect';

const Header = ({ isUserNotAuthorized, logout, history }) => (
    <div>
        {isUserNotAuthorized
            ? <Button title="Login" onClick={() => history.push(routes.login)} />
            : <Button title="Logout" onClick={() => logout({ history })} />}
    </div>
);

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    isUserNotAuthorized: PropTypes.bool.isRequired,
};

export default withRouter(
    withUserInfo(
        connect(Header),
    ),
);
