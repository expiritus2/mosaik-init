import { connect } from 'react-redux';

import { appLogoutEffect, appLoadEffect, loadPinsEffect, openSearchDrawerEffect, openMenuDrawerEffect, appLoginEffect } from 'store/effects/app';

const mapDispatchToProps = {
    loadInner: appLoadEffect,
    logout: appLogoutEffect,
    loadPins: loadPinsEffect,
    openSearchDrawer: openSearchDrawerEffect,
    openMenuDrawer: openMenuDrawerEffect,
    login: appLoginEffect,
};

export default connect(null, mapDispatchToProps);
