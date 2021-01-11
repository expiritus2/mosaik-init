import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Content = ({ isActive, children, animation, direction }) => {
    if (!isActive) return null;

    return (
        <div className={classNames(
            styles.content,
            styles[animation],
            styles[direction],
            { [styles.active]: isActive },
        )}
        >
            {children}
        </div>
    );
};

Content.propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
    animation: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
};

Content.defaultProps = {
    isActive: false,
};

export default Content;
