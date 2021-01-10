import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isFloatStr } from 'helpers';

import styles from './styles.module.scss';

const Input = (props) => {
    const { id, name, type, label, value, onChange, className } = props;
    const { placeholder, disabled, error } = props;
    const [inputValue, setInputValue] = useState(value);

    const onChangeHandler = (event) => {
        const { value: inputVal } = event.target;

        if (type === Input.TYPE_NUMBER && (!isFloatStr(inputVal) && inputVal !== '')) {
            return;
        }

        setInputValue(inputVal);
        onChange(event, inputVal);
    };

    return (
        <div className={classNames(styles.inputWrapper, className)}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                name={name}
                disabled={disabled}
                type={type === 'number' ? 'text' : type}
                value={inputValue}
                onChange={onChangeHandler}
                placeholder={placeholder}
            />
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

Input.TYPE_TEXT = 'text';
Input.TYPE_NUMBER = 'number';

Input.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
};

Input.defaultProps = {
    id: undefined,
    name: undefined,
    placeholder: undefined,
    className: '',
    type: Input.TYPE_TEXT,
    label: undefined,
    onChange: () => {},
    value: '',
    disabled: false,
    error: undefined,
};

export default Input;
