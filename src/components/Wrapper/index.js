import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from 'components';

const Wrapper = ({ isPending, className, children }) => (
    <div className={className}>
        {isPending ? <Spinner /> : children}
    </div>
);

Wrapper.propTypes = {
    className: PropTypes.string,
    isPending: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
    className: '',
};

export default Wrapper;
