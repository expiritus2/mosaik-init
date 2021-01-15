import { connect } from 'react-redux';

import { userInitEffect } from 'store/effects/user';

const mapDispatchToProps = {
    userInit: userInitEffect,
};

export default connect(null, mapDispatchToProps);
