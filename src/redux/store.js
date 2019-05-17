import { createStore } from 'redux';
import rootReducer from './combinedReducers';

const store = createStore(rootReducer)

export { store }