import { connect } from 'react-redux';

import { appLogoutEffect, appLoadEffect, loadPinsEffect, openSearchDrawerEffect, openMenuDrawerEffect } from 'store/effects/app';

const mapDispatchToProps = {
    loadInner: appLoadEffect,
    logout: appLogoutEffect,
    loadPins: loadPinsEffect,
    openSearchDrawer: openSearchDrawerEffect,
    openMenuDrawer: openMenuDrawerEffect,
};

export default connect(null, mapDispatchToProps);
