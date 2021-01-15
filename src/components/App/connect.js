import { connect } from 'react-redux';

import { userInitEffect } from 'store/effects/user';

const mapStateToProps = (state) => ({
    user: state.user,
    state: state.user.state,
});

const mapDispatchToProps = {
    userInit: userInitEffect,
};

export default connect(mapStateToProps, mapDispatchToProps);
