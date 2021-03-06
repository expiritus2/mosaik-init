import { connect } from 'react-redux';

import { getUserRoles } from 'store/selectors/user';

const mapStateToProps = (state) => ({
    userRoles: getUserRoles(state),
});

export default connect(mapStateToProps);
