import { connect } from 'react-redux';

import { openMenuDrawerEffect } from 'store/effects/app';

const mapStateToProps = (state) => ({
    isOpen: state.app.isMenuDrawerOpen,
});

const mapDispatchToProps = {
    openMenuDrawer: openMenuDrawerEffect,
};

export default connect(mapStateToProps, mapDispatchToProps);
