import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';

import { withUserInfo } from 'hocs';
import { Button } from 'components';
import { routes } from 'settings/navigation/routes';

import connect from './connect';

const Actions = ({ isUserAuthorized, history, logout }) => {
    const goToLoginPage = () => { history.push(routes.login); };
    const goToMainPage = () => { logout({ history }); };

    return (
        isUserAuthorized
            ? <Button title="Logout" onClick={goToMainPage} />
            : <Button title="Login" onClick={goToLoginPage} />
    );
};

Actions.propTypes = {
    logout: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    isUserAuthorized: PropTypes.bool.isRequired,
};

export default withRouter(
    withUserInfo(connect(Actions)),
);
