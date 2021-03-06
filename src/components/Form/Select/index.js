import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import SelectSearch from 'react-select-search';
import { find, get } from 'lodash-es';
import classNames from 'classnames';

import styles from './syles.module.scss';

const SelectComponent = (props) => {
    const { id, defaultValue, onSelect, options, label, className, closeOnSelect } = props;
    const { name, search, multiple, placeholder, value, disabled, error } = props;
    const { printOptions } = props;

    const onChange = useCallback((val) => {
        const valueObj = find(options, { value: val });
        const fakeEvent = { target: { value: valueObj, name } };

        if (Array.isArray(val)) {
            const values = val.map((v) => find(options, { value: v }));
            fakeEvent.target.value = values;
            return onSelect(fakeEvent, values);
        }

        onSelect(fakeEvent, valueObj);
    }, [name, onSelect, options]);

    const renderValue = (valueProps) => (
        <input
            {...valueProps}
            className={classNames(styles.input, className.input)}
            name={name}
            autoComplete="off"
        />
    );

    const getValue = () => {
        if (Array.isArray(value)) {
            const defVal = typeof value === 'object' ? '' : value;
            return value.map((val) => get(val, 'value', defVal));
        }

        const defVal = typeof value === 'object' ? '' : value;
        return get(value, 'value', defVal) || get(defaultValue, 'value', defaultValue);
    };

    return (
        <div className={classNames(styles.selectWrapper, className.wrapper)}>
            {label && <label htmlFor={id}>{label}</label>}
            <SelectSearch
                id={id}
                printOptions={printOptions}
                closeOnSelect={closeOnSelect}
                disabled={disabled}
                search={search}
                options={options}
                renderValue={renderValue}
                multiple={multiple}
                onChange={onChange}
                placeholder={placeholder}
                className={(key) => classNames(styles[key], className[key])}
                value={getValue()}
            />
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

SelectComponent.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    className: PropTypes.shape({
        wrapper: PropTypes.string,
        input: PropTypes.string,
    }),
    defaultValue: PropTypes.oneOfType([
        PropTypes.shape({ name: PropTypes.string, value: PropTypes.string }),
        PropTypes.string,
    ]),
    onSelect: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
    })).isRequired,
    name: PropTypes.string,
    search: PropTypes.bool,
    multiple: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
        }),
        PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
        })),
    ]),
    label: PropTypes.string,
    error: PropTypes.string,
    closeOnSelect: PropTypes.bool,
    printOptions: PropTypes.string,
};

SelectComponent.defaultProps = {
    id: undefined,
    className: {
        wrapper: '',
    },
    defaultValue: undefined,
    onSelect: () => {},
    name: null,
    search: false,
    multiple: false,
    placeholder: 'Select',
    value: null,
    label: undefined,
    disabled: undefined,
    error: undefined,
    closeOnSelect: true,
    printOptions: 'on-focus',
};

export default SelectComponent;
