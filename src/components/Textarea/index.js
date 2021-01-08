import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Textarea = ({ id, label, rows, value, onChange, className, disabled }) => {
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
                disabled={disabled}
                rows={rows}
                value={inputValue}
                onChange={onChangeHandler}
            />
        </div>
    );
};

Textarea.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    rows: PropTypes.number,
    disabled: PropTypes.bool,
};

Textarea.defaultProps = {
    id: undefined,
    className: '',
    label: undefined,
    onChange: () => {},
    value: '',
    rows: 5,
    disabled: false,
};

export default Textarea;
