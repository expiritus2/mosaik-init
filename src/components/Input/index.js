import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isFloatStr } from 'helpers';

import styles from './styles.module.scss';

const Input = ({ id, type, label, value, onChange, className }) => {
    const [inputValue, setInputValue] = useState(value);
    const onChangeHandler = (event) => {
        const { value: inputVal } = event.target;

        if (type === Input.TYPE_NUMBER && (!isFloatStr(inputVal) && inputVal !== '')) {
            return;
        }

        setInputValue(inputVal);
        onChange(inputVal);
    };

    return (
        <div className={classNames(styles.inputWrapper, className)}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type === 'number' ? 'text' : type}
                value={inputValue}
                onChange={onChangeHandler}
            />
        </div>
    );
};

Input.TYPE_TEXT = 'text';
Input.TYPE_NUMBER = 'number';

Input.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

Input.defaultProps = {
    id: undefined,
    className: '',
    type: Input.TYPE_TEXT,
    label: undefined,
    onChange: () => {},
    value: '',
};

export default Input;
