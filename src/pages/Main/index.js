import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadTestEffect, loadPinsEffect, chatEffect } from 'store/effects/app';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Main = (props) => {
    const onClick = () => {
        const { loadPins, subscribeChat } = props;
        loadPins();
        subscribeChat();
    };

    const onUnsubscribe = () => {
        const { unsubscribeChat } = props;
        unsubscribeChat();
    };

    return (
        <div className={classNames(styles.container, 'container')}>
            Main Page
            <button type="button" onClick={onClick}>Click me</button>
            <button type="button" onClick={onUnsubscribe}>Unsubscribe</button>
        </div>
    );
};

Main.propTypes = {
    loadPins: PropTypes.func.isRequired,
    subscribeChat: PropTypes.func.isRequired,
    unsubscribeChat: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        loadTest: loadTestEffect,
        loadPins: loadPinsEffect,
        subscribeChat: chatEffect.subscribe,
        unsubscribeChat: chatEffect.unsubscribe,
    },
)(Main);
