import React from 'react';
import PropTypes from 'prop-types';
import { READY } from 'settings/constants/apiState';

import { withUserInfo } from 'hocs';

import styles from './styles.module.scss';

const Header = ({ user }) => (
    <div className={styles.header}>
        {user.meta.status === 401 || (user.state === READY && !user.data)
            ? <div>Login Button</div>
            : <div>Logout Button</div>}
    </div>
);

Header.propTypes = {
    user: PropTypes.shape({
        state: PropTypes.string,
        data: PropTypes.shape({}),
        meta: PropTypes.shape({
            status: PropTypes.number,
        }),
    }),
};

Header.defaultProps = {
    user: {},
};

export default withUserInfo(Header);
