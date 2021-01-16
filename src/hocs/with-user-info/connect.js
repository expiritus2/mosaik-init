import { connect } from 'react-redux';
import { getCurrentUserEffect } from 'store/effects/user';

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = {
    getCurrentUser: getCurrentUserEffect,
};

export default connect(mapStateToProps, mapDispatchToProps);
