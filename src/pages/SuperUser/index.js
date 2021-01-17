import React from 'react';
import PropTypes from 'prop-types';

import { Header, Wrapper } from 'components';
import { withAuthUser } from 'hocs';

const SuperUser = ({ isPendingRequest }) => (
    <div>
        <Header />
        <Wrapper isPending={isPendingRequest}>
            <div>Super User</div>
        </Wrapper>
    </div>
);

SuperUser.propTypes = {
    isPendingRequest: PropTypes.bool.isRequired,
};

export default withAuthUser(SuperUser);
