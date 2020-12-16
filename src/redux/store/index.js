import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './rootReducer';

const middlewares = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const configureStore = (initialState) => createStoreWithMiddleware(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore();
