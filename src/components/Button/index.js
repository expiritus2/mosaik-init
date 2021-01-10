import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Button = ({ id, title, type, disabled, className, onClick }) => (
    <button
        id={id}
        type={type}
        disabled={disabled}
        className={classNames(styles.button, className)}
        onClick={onClick}
    >
        {title}
    </button>
);

Button.TYPE_BUTTON = 'button';
Button.TYPE_SUBMIT = 'submit';

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: '',
    id: undefined,
    type: Button.TYPE_BUTTON,
    disabled: false,
    onClick: () => {},
};

export default Button;
