import { connect } from 'react-redux';

import { SUPER_USER } from 'settings/constants/roles';

function mapStateToProps() {
    return {
        userRole: SUPER_USER,
    };
}

export default (Component) => connect(mapStateToProps)(Component);
