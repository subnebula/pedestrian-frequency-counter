import { createStore, applyMiddleware } from 'redux'
import rootReducer from './combinedReducers'
import ReduxThunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);

export { store }