import { createStore } from 'redux';
<<<<<<< HEAD
import { reducer } from './TableData';
=======
import rootReducer from './combinedReducers';
>>>>>>> 75a9acfe046674584e1ebbdd4d7250e3f2ee381d

const store = createStore(rootReducer)

export { store }