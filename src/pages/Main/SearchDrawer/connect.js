import { connect } from 'react-redux';
import { openSearchDrawerEffect } from 'store/effects/app';

const mapStateToProps = (state) => ({
    isOpen: state.app.isSearchDrawerOpen,
});

const mapDispatchToProps = {
    openSearchDrawer: openSearchDrawerEffect,
};

export default connect(mapStateToProps, mapDispatchToProps);
