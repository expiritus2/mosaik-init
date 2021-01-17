import React from 'react';
import PropTypes from 'prop-types';

import { withAuthUser } from 'hocs';

import { Header, Wrapper } from 'components';

import styles from './styles.module.scss';

const BrokerageAdmin = ({ isPendingRequest }) => (
    <div>
        <Header />
        <Wrapper className={styles.wrapper} isPending={isPendingRequest}>
            <div>Brokerage Admin</div>
        </Wrapper>
    </div>
);

BrokerageAdmin.propTypes = {
    isPendingRequest: PropTypes.bool.isRequired,
};

export default withAuthUser(BrokerageAdmin);
