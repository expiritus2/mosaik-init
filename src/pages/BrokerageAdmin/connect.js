import { connect } from 'react-redux';

import { logoutEffect } from 'store/effects/user';

const mapDispatchToProps = {
    logout: logoutEffect,
};

export default connect(null, mapDispatchToProps);
