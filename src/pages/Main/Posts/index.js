import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from 'components';
import connect from './connect';

import Post from './Post';

const Posts = ({ posts, isPending, className }) => (
    <Wrapper isPending={isPending} className={className}>
        {(posts || []).map((post) => <Post key={post.id} {...post} />)}
    </Wrapper>
);

Posts.propTypes = {
    className: PropTypes.string,
    isPending: PropTypes.bool.isRequired,
    posts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Posts.defaultProps = {
    className: '',
};

export default connect(Posts);
