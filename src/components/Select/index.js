import React from 'react';
import PropTypes from 'prop-types';
import SelectSearch from 'react-select-search';
import { find, get } from 'lodash-es';
import classNames from 'classnames';

import styles from './syles.module.scss';

const SelectComponent = (props) => {
    const { id, defaultValue, onSelect, options, label, className } = props;
    const { name, search, multiple, placeholder, value } = props;

    const onChange = (val) => {
        onSelect(find(options, { value: val }));
    };

    return (
        <div className={classNames(styles.selectWrapper, className.wrapper)}>
            {label && <label htmlFor={id}>{label}</label>}
            <SelectSearch
                id={id}
                name={name}
                search={search}
                options={options}
                multiple={multiple}
                onChange={onChange}
                placeholder={placeholder}
                className={(key) => classNames(styles[key], className[key])}
                value={get(value, 'value', value) || get(defaultValue, 'value', defaultValue)}
            />
        </div>
    );
};

SelectComponent.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.shape({
        wrapper: PropTypes.string,
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
    label: PropTypes.string,
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
};

export default SelectComponent;
