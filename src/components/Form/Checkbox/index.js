/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { GiCheckMark } from 'react-icons/gi';
import classNames from 'classnames';

import styles from './styles.module.scss';

const CheckboxComponent = (props) => {
    const { checked, onChange, disabled, label, direction } = props;
    const { id, name } = props;

    const [checkedValue, setCheckedValue] = useState(checked);

    const onChangeHandler = useCallback((event) => {
        const { value } = event.target;
        setCheckedValue((prevVal) => !prevVal);
        onChange(event, value);
    }, [onChange]);

    return (
        <div>
            <label className={classNames(styles.wrapper, styles[direction])}>
                {label && <span className={styles.label}>{label}</span>}
                <input
                    id={id}
                    name={name}
                    className={styles.checkbox}
                    type="checkbox"
                    value={checked ?? checkedValue}
                    onChange={onChangeHandler}
                    disabled={disabled}
                />
                <span className={styles.customCheckboxWrapper}>
                    <div className={styles.customCheckbox} />
                    <GiCheckMark className={styles.checkmark} />
                </span>
            </label>
        </div>
    );
};

CheckboxComponent.DIRECTION_LEFT = 'left';
CheckboxComponent.DIRECTION_RIGHT = 'right';

CheckboxComponent.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    direction: PropTypes.string,
};

CheckboxComponent.defaultProps = {
    id: undefined,
    name: undefined,
    checked: false,
    onChange: () => {},
    disabled: false,
    label: '',
    direction: CheckboxComponent.DIRECTION_LEFT,
};

export default CheckboxComponent;
