import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { withUserInfo } from 'hocs';
import { Button } from 'components';
import { routes } from 'settings/navigation/routes';

import connect from './connect';

const Actions = ({ isUserAuthorized, logout }) => {
    const history = useHistory();

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
    isUserAuthorized: PropTypes.bool.isRequired,
};

export default withUserInfo(connect(Actions));
