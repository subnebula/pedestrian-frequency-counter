/**
 * This helper file provides a function for creating the Redux store. In
 * development mode it will also connect up the Redux development tools for
 * debugging purposes.
 */

import { compose, applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import combinedReducers from '../reducers';

let finalCreateStore;

finalCreateStore = compose(
  // Enables middleware
  applyMiddleware(reduxThunk),

)(createStore);


export default initialState => finalCreateStore(combinedReducers, initialState);
