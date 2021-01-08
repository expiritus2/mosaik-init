import React from 'react';
import PropTypes from 'prop-types';
import FlatPickr from 'react-flatpickr';
import moment from 'moment';
import classNames from 'classnames';

import styles from './styles.module.scss';
import './styles.scss';

const DatePicker = (props) => {
    const { id, date, onChange, className, options, label } = props;

    return (
        <div className={styles.dateInput}>
            {label && <label htmlFor={id}>{label}</label>}
            <FlatPickr
                className={classNames(className)}
                value={moment(date).valueOf()}
                onChange={onChange}
                options={{
                    enableTime: false,
                    ...options,
                }}
            />
        </div>
    );
};

DatePicker.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    className: PropTypes.string,
    date: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.instanceOf(Date),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    ]),
    onChange: PropTypes.func,
    options: PropTypes.shape({}),
};

DatePicker.defaultProps = {
    id: undefined,
    label: undefined,
    className: '',
    date: undefined,
    onChange: () => {},
    options: {},
};

export default DatePicker;
