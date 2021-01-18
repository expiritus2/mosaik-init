import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'services/history';

import app from './app';
import user from './user';

export default combineReducers({
    router: connectRouter(history),
    app,
    user,
});
