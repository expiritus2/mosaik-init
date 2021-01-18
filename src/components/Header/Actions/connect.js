import { connect } from 'react-redux';

import { appLogoutEffect } from 'store/effects/app';

const mapStateToProps = (state) => ({
    auth: state.app.auth,
});

const mapDispatchToProps = {
    logout: appLogoutEffect,
};

export default connect(mapStateToProps, mapDispatchToProps);
