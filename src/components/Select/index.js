import React from 'react';
import PropTypes from 'prop-types';
import SelectSearch from 'react-select-search';
import { find, get } from 'lodash-es';
import classNames from 'classnames';

import styles from './syles.module.scss';

const SelectComponent = (props) => {
    const { defaultValue, onSelect, options, className } = props;
    const { name, search, multiple, placeholder, value } = props;

    const onChange = (val) => {
        onSelect(find(options, { value: val }));
    };

    return (
        <SelectSearch
            search={search}
            multiple={multiple}
            onChange={onChange}
            className={(key) => classNames(styles[key], className[key])}
            options={options}
            value={get(value, 'value', value) || get(defaultValue, 'value', defaultValue)}
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
};

SelectComponent.defaultProps = {
    className: {},
    defaultValue: undefined,
    onSelect: () => {},
    name: null,
    search: false,
    multiple: false,
    placeholder: 'Select',
    value: null,
};

export default SelectComponent;
