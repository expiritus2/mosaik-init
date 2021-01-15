import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from 'components';

import connect from './connect';
import styles from './styles.module.scss';

const AppLoading = ({ children, loading }) => {
    if (loading) {
        return (
            <Wrapper className={styles.wrapper} isPending={loading} />
        );
    }

    return children;
};

AppLoading.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default connect(AppLoading);
