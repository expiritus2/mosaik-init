import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash-es';
import classNames from 'classnames';

import Button from './Button';

import styles from './styles.module.scss';

const ButtonGroup = (props) => {
    const { buttons, multiple, activeBtns, onChange } = props;
    const { className, buttonClassName, disabled } = props;
    const [activeButtons, setActiveButtons] = useState(activeBtns);

    const pushOrRemove = useCallback((id) => (
        activeButtons.includes(id)
            ? filter(activeButtons, (activeId) => activeId !== id)
            : [...(multiple ? activeButtons : []), id]
    ), [activeButtons, multiple]);

    const onClick = useCallback((id) => {
        if (disabled) return null;

        const newActives = pushOrRemove(id);

        setActiveButtons(newActives);
        onChange(newActives);
    }, [onChange, pushOrRemove, disabled]);

    return (
        <div className={classNames(styles.buttons, { [styles.disabled]: disabled }, className)}>
            {buttons.map(({ id, label }) => (
                <Button
                    key={id}
                    disabled={disabled}
                    label={label}
                    onClick={() => onClick(id)}
                    active={activeButtons.includes(id)}
                    className={buttonClassName}
                />
            ))}
        </div>
    );
};

ButtonGroup.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string,
    })).isRequired,
    multiple: PropTypes.bool,
    activeBtns: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    className: PropTypes.string,
    buttonClassName: PropTypes.shape({
        button: PropTypes.string,
        buttonActive: PropTypes.string,
    }),
    disabled: PropTypes.bool,
};

ButtonGroup.defaultProps = {
    className: '',
    multiple: false,
    activeBtns: [],
    onChange: () => {},
    buttonClassName: {},
    disabled: false,
};

export default ButtonGroup;
