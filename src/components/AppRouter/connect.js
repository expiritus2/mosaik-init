import { connect } from 'react-redux';

import { SUPER_USER } from 'settings/constants/roles';

function mapStateToProps() {
    return {
        userRoles: [SUPER_USER],
    };
}

export default connect(mapStateToProps);
