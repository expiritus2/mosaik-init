import { connect } from 'react-redux';

import { appLogoutEffect, appLoadEffect } from 'store/effects/app';
import { isLoading, getPosts } from 'store/selectors/app';

const mapStateToProps = (state) => ({
    loading: isLoading(state),
    posts: getPosts(state),
});

const mapDispatchToProps = {
    loadInner: appLoadEffect,
    logout: appLogoutEffect,
};

export default (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);
