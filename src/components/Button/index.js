import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ title, type, disabled, className, onClick }) => (
    <button
        type={type}
        disabled={disabled}
        className={classNames(className)}
        onClick={onClick}
    >
        {title}
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: '',
    type: 'button',
    disabled: false,
    onClick: () => {},
};

export default Button;
