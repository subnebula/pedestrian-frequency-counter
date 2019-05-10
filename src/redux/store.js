import { createStore } from 'redux';
import { reducer } from './DataStore';

const store = createStore(reducer)

export { store }