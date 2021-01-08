import React from 'react';
import PropTypes from 'prop-types';
import FlatPickr from 'react-flatpickr';
import moment from 'moment';
import classNames from 'classnames';

import styles from './styles.module.scss';
import './styles.scss';

const DatePicker = (props) => {
    const { date, onChange, className, options } = props;

    return (
        <FlatPickr
            className={classNames(styles.dateInput, className)}
            value={moment(date).valueOf()}
            onChange={onChange}
            options={{
                enableTime: false,
                ...options,
            }}
        />
    );
};

DatePicker.propTypes = {
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
    className: '',
    date: undefined,
    onChange: () => {},
    options: {},
};

export default DatePicker;
