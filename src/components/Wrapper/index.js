import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from 'components';

const Wrapper = ({ isPending, className, spinnerClassname, children }) => (
    <div className={className}>
        {isPending ? <Spinner className={spinnerClassname} /> : children}
    </div>
);

Wrapper.propTypes = {
    className: PropTypes.string,
    spinnerClassname: PropTypes.string,
    isPending: PropTypes.bool.isRequired,
    children: PropTypes.node,
};

Wrapper.defaultProps = {
    className: '',
    spinnerClassname: '',
    children: undefined,
};

export default Wrapper;
