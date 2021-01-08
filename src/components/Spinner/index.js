import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Spinner = ({ className }) => (
    <div className={classNames(styles.spinner, className)}>Loading...</div>
);

Spinner.propTypes = {
    className: PropTypes.string,
};

Spinner.defaultProps = {
    className: '',
};

export default Spinner;
