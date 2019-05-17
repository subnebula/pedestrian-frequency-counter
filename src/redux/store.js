import { createStore } from 'redux';
import { reducer } from './TableData';

const store = createStore(reducer)

export { store }