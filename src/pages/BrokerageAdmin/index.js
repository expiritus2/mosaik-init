import React from 'react';
import PropTypes from 'prop-types';

import { withAuthUser } from 'hocs';

import { Header, Wrapper } from 'components';

import styles from './styles.module.scss';

const BrokerageAdmin = ({ isPendingUserRequest }) => (
    <div>
        <Header />
        <Wrapper className={styles.wrapper} isPending={isPendingUserRequest}>
            <div>Brokerage Admin</div>
        </Wrapper>
    </div>
);

BrokerageAdmin.propTypes = {
    isPendingUserRequest: PropTypes.bool.isRequired,
};

export default withAuthUser(BrokerageAdmin);
