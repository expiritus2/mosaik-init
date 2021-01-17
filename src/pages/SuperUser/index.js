import React from 'react';
import PropTypes from 'prop-types';

import { Header, Wrapper } from 'components';
import { withAuthUser } from 'hocs';

import styles from './styles.module.scss';

const SuperUser = ({ isPendingRequest }) => (
    <div>
        <Header />
        <Wrapper className={styles.wrapper} isPending={isPendingRequest}>
            <div>Super User</div>
        </Wrapper>
    </div>
);

SuperUser.propTypes = {
    isPendingRequest: PropTypes.bool.isRequired,
};

export default withAuthUser(SuperUser);
