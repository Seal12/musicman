import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory';

import rootReducer from './_reducers';

const loggerMiddleware = createLogger();
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware,loggerMiddleware)
);

export const history = createHistory();
export default store;
