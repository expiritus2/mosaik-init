import { connect } from 'react-redux';
import { userInitEffect } from 'store/effects/user';

function mapStateToProps(state) {
    return {
        userRoles: state.user.data?.roles,
        meta: state.user.meta,
        userRequestState: state.user.state,
    };
}

const mapDispatchToProps = {
    userInit: userInitEffect,
};

export default connect(mapStateToProps, mapDispatchToProps);
