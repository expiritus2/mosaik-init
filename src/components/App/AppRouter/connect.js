import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps);
