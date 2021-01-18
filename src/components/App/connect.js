import { connect } from 'react-redux';

import { appInitEffect } from 'store/effects/app';

const mapDispatchToProps = {
    appInit: appInitEffect,
};

export default connect(undefined, mapDispatchToProps);
