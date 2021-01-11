import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Tab = ({ label, onClick, isActive, direction }) => (
    <div
        key={label}
        className={classNames(
            styles.tab,
            styles[direction],
            { [styles.active]: isActive },
        )}
        onClick={onClick}
    >
        {label}
    </div>
);

Tab.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool,
    direction: PropTypes.string.isRequired,
};

Tab.defaultProps = {
    isActive: false,
};

export default Tab;
