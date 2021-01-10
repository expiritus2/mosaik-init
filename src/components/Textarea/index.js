import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Textarea = (props) => {
    const { id, name, label, rows, value, onChange, className, disabled } = props;
    const { placeholder, error } = props;

    const [inputValue, setTextareaValue] = useState(value);
    const onChangeHandler = (event) => {
        const { value: inputVal } = event.target;

        setTextareaValue(inputVal);
        onChange(inputVal);
    };

    return (
        <div className={classNames(styles.inputWrapper, className)}>
            {label && <label htmlFor={id}>{label}</label>}
            <textarea
                id={id}
                name={name}
                disabled={disabled}
                rows={rows}
                value={inputValue}
                className={styles.inputField}
                onChange={onChangeHandler}
                placeholder={placeholder}
            />
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

Textarea.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    rows: PropTypes.number,
    disabled: PropTypes.bool,
};

Textarea.defaultProps = {
    id: undefined,
    name: undefined,
    placeholder: undefined,
    className: '',
    label: undefined,
    onChange: () => {},
    value: '',
    rows: 5,
    disabled: false,
    error: undefined,
};

export default Textarea;
