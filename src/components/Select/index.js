import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SelectSearch from 'react-select-search';
import { find, get } from 'lodash-es';
import classNames from 'classnames';

import styles from './syles.module.scss';

const SelectComponent = (props) => {
    const { defaultValue, onSelect, options, className } = props;
    const { name, search, multiple, placeholder } = props;

    const [optionValue, setOptionValue] = useState(get(defaultValue, 'value', defaultValue));

    const onChange = (val) => {
        setOptionValue(val);
        onSelect(find(options, { value: val }));
    };

    const onClassName = (key) => (
        className[key] ? classNames(styles[key], className[key]) : styles[key]
    );

    return (
        <SelectSearch
            search={search}
            multiple={multiple}
            onChange={onChange}
            className={onClassName}
            options={options}
            value={optionValue}
            name={name}
            placeholder={placeholder}
        />
    );
};

SelectComponent.propTypes = {
    className: PropTypes.shape({}),
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
};

SelectComponent.defaultProps = {
    className: {},
    defaultValue: undefined,
    onSelect: () => {},
    name: null,
    search: false,
    multiple: false,
    placeholder: 'Select',
};

export default SelectComponent;
