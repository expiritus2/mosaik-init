import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Button = ({ label, onClick, active, className }) => (
    <button
        className={classNames(
            styles.button,
            { [className.buttonActive || styles.active]: active },
            className.button,
        )}
        type="button"
        onClick={onClick}
    >
        {label}
    </button>
);

Button.propTypes = {
    className: PropTypes.shape({
        button: PropTypes.string,
        buttonActive: PropTypes.string,
    }),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool,
};

Button.defaultProps = {
    className: {},
    active: false,
};

export default Button;
