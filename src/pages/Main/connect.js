import { connect } from 'react-redux';

import { appLogoutEffect, appLoadEffect, loadPinsEffect, appLoginEffect } from 'store/effects/app';

const mapDispatchToProps = {
    loadInner: appLoadEffect,
    logout: appLogoutEffect,
    loadPins: loadPinsEffect,
    login: appLoginEffect,
};

export default connect(null, mapDispatchToProps);
