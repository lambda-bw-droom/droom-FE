import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducer';
import { setToken } from '../middleware/';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, setToken))
);
