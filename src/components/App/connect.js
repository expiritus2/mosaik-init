import { connect } from 'react-redux';

import { userInitEffect } from 'store/effects/user';

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = {
    userInit: userInitEffect,
};

export default connect(mapStateToProps, mapDispatchToProps);
