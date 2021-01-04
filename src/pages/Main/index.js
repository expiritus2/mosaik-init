import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import connect from './connect';

import styles from './styles.module.scss';

const Component = ({ loadInner, logout, loading, posts }) => {
    const onClick = () => {
        loadInner({});
    };

    return (
        <div>
            <button type="button" onClick={onClick}>Click me</button>
            <button type="button" onClick={logout}>Logout</button>
            <div className={classNames(styles.container, 'container')}>
                <div>
                    {loading && 'Loading'}
                    {!!posts?.length && posts.map((post) => (
                        <div key={post.id}>{post.title}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Component.propTypes = {
    loadInner: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    posts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(Component);
