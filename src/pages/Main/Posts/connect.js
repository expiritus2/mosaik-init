import { connect } from 'react-redux';

import { isPendingPostsSelector, getPostsSelector } from 'store/selectors/app';

const mapStateToProps = (state) => ({
    isPending: isPendingPostsSelector(state),
    posts: getPostsSelector(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps);
