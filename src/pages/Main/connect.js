import { connect } from 'react-redux';

import { appLogoutEffect, appLoadEffect, loadPinsEffect } from 'store/effects/app';

const mapDispatchToProps = {
    loadInner: appLoadEffect,
    logout: appLogoutEffect,
    loadPins: loadPinsEffect,
};

export default connect(null, mapDispatchToProps);
