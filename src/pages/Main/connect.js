import { connect } from 'react-redux';

import { appLogoutEffect, appLoadEffect } from 'store/effects/app';

const mapDispatchToProps = {
    loadInner: appLoadEffect,
    logout: appLogoutEffect,
};

export default connect(null, mapDispatchToProps);
