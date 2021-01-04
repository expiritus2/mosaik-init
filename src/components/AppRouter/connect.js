import { connect } from 'react-redux';

import { SUPER_ADMIN } from 'settings/constants/roles';

function mapStateToProps() {
    return {
        userRole: SUPER_ADMIN,
    };
}

export default (Component) => connect(mapStateToProps)(Component);
