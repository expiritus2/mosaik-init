import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import FlatPickr from 'react-flatpickr';
import classNames from 'classnames';
import moment from 'moment';
// TODO: Probable react icons should be removed
import { FiCalendar } from 'react-icons/fi';

import styles from './styles.module.scss';
import './styles.scss';

const DatePicker = (props) => {
    const { id, name, value, onChange, className, options, label } = props;
    const { placeholder, disabled, error } = props;

    const onChangeHandler = useCallback((newDate) => {
        onChange({ target: { value: newDate, name } }, newDate);
    }, [name, onChange]);

    return (
        <div className={classNames(styles.dateInput, className)}>
            {label && <label htmlFor={id}>{label}</label>}
            <div className={styles.icon}><FiCalendar /></div>
            <FlatPickr
                id={id}
                placeholder={placeholder}
                name={name}
                disabled={disabled}
                className={styles.inputField}
                value={value || moment().valueOf()}
                onChange={onChangeHandler}
                options={{
                    enableTime: true,
                    monthSelectorType: 'static',
                    disableMobile: false,
                    ...options,
                }}
            />
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

DatePicker.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.instanceOf(Date),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    ]),
    onChange: PropTypes.func,
    options: PropTypes.shape({}),
    error: PropTypes.string,
};

DatePicker.defaultProps = {
    id: undefined,
    name: undefined,
    label: undefined,
    className: '',
    value: undefined,
    onChange: () => {},
    options: {},
    placeholder: undefined,
    disabled: false,
    error: undefined,
};

export default DatePicker;
