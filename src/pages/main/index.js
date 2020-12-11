import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { load } from 'store/effects/app';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Main = (props) => {
    const onClick = () => {
        const { loadInner } = props;
        loadInner({});
    };

    const test = {
        name: {
            name2: 'test',
        },
    };

    console.log(test?.name?.name2);

    return (
        <div className={classNames(styles.container, 'container')}>
            Main Page
            <button type="button" onClick={onClick}>Click me</button>
        </div>
    );
};

Main.propTypes = {
    loadInner: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        loadInner: load,
    },
)(Main);
