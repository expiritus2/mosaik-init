import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import history from 'services/history';
import rootReducer from './reducers';

const middlewares = [routerMiddleware(history), ReduxThunk];

const storeEnhancers = process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const store = createStore(rootReducer, {}, storeEnhancers);

export default store;
export const { dispatch, getState } = store;
