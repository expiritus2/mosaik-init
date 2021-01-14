import { connect } from 'react-redux';
import { userInitEffect } from 'store/effects/user';

function mapStateToProps(state) {
    return {
        userData: state.user.data,
        meta: state.user.meta,
        userRequestState: state.user.state,
    };
}

const mapDispatchToProps = {
    userInit: userInitEffect,
};

export default connect(mapStateToProps, mapDispatchToProps);
