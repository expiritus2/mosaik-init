import { connect } from 'react-redux';

import { appInitEffect } from 'store/effects/app';
import { isAuth } from 'store/selectors/app';

const mapStateToProps = (state) => ({
    auth: isAuth(state),
    isUser: true, // TODO: selector is user with some role loaded?
});

const mapDispatchToProps = {
    appInit: appInitEffect,
};

export default connect(mapStateToProps, mapDispatchToProps);
