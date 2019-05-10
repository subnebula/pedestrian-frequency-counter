import { createStore } from 'redux';
import { reducer } from './markers';

const store = createStore(reducer)

export { store }