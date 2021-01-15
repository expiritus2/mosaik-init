import { connect } from 'react-redux';

import { getIsAuthLoading } from 'store/selectors/app';

const mapStateToProps = (state) => ({
    loading: getIsAuthLoading(state),
});

export default connect(mapStateToProps);
