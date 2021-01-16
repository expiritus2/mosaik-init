import { connect } from 'react-redux';
import { loginEffect } from 'store/effects/user';

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = {
    login: loginEffect,
};

export default connect(mapStateToProps, mapDispatchToProps);
