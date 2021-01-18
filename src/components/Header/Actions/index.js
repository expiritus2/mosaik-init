import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Button } from 'components';
import { routes } from 'settings/navigation/routes';

import connect from './connect';

const Actions = ({ auth, logout }) => {
    const history = useHistory();

    const goToLoginPage = () => { history.push(routes.login); };
    const goToMainPage = () => { logout(); };

    return (
        auth
            ? <Button title="Logout" onClick={goToMainPage} />
            : <Button title="Login" onClick={goToLoginPage} />
    );
};

Actions.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.bool.isRequired,
};

export default connect(Actions);
