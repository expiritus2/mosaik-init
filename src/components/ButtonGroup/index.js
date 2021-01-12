import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash-es';
import classNames from 'classnames';

import Button from './Button';

import styles from './styles.module.scss';

const ButtonGroup = (props) => {
    const { buttons, multiple, activeBtns, onChange } = props;
    const { className, buttonClassName } = props;
    const [activeButtons, setActiveButtons] = useState(activeBtns);

    const pushOrRemove = (id) => (
        activeButtons.includes(id)
            ? filter(activeButtons, (activeId) => activeId !== id)
            : [...activeButtons, id]
    );

    const onClick = (id) => {
        if (multiple) {
            const newActives = pushOrRemove(id);
            setActiveButtons(newActives);
            return onChange(newActives);
        }

        setActiveButtons([id]);
        return onChange([id]);
    };

    return (
        <div className={classNames(styles.buttons, className)}>
            {buttons.map(({ id, label }) => (
                <Button
                    key={id}
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
};

ButtonGroup.defaultProps = {
    className: '',
    multiple: false,
    activeBtns: [],
    onChange: () => {},
    buttonClassName: {},
};

export default ButtonGroup;
