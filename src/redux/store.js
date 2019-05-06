import { createStore } from 'redux';
import { reducer } from './nodes';

const store = createStore(reducer)

export { store }