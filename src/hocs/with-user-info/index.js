import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IDLE, READY, PENDING, ERROR } from 'settings/constants/apiState';

import connect from './connect';

export default (Component) => {
    const WithUserInfo = ({ user, getCurrentUser, ...props }) => {
        const isUserNotInitialised = user.state === IDLE;
        const isPendingRequest = user.state === PENDING;
        const isUserRequestReady = user.state === READY;
        const isError = user.state === ERROR;

        const userLoggedOut = isUserRequestReady && (!user.data || !Object.keys(user?.data || {}).length);

        useEffect(() => {
            if (isUserNotInitialised) {
                getCurrentUser();
            }
        }, []); // eslint-disable-line

        if (isUserNotInitialised || isPendingRequest) return null;

        return (
            <Component
                {...props}
                user={user}
                isPendingRequest={isPendingRequest}
                isUserAuthorized={!isError && !userLoggedOut}
            />
        );
    };

    WithUserInfo.propTypes = {
        user: PropTypes.shape({
            state: PropTypes.string,
            data: PropTypes.shape({}),
            meta: PropTypes.shape({
                status: PropTypes.number,
            }),
        }).isRequired,
        getCurrentUser: PropTypes.func.isRequired,
    };

    return connect(WithUserInfo);
};
