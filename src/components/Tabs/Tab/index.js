import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Tab = ({ label, onClick, isActive }) => (
    <div className={classNames(styles.tab, { [styles.active]: isActive })} onClick={onClick} key={label}>{label}</div>
);

Tab.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool,
};

Tab.defaultProps = {
    isActive: false,
};

export default Tab;
