import { combineReducers } from 'redux';

export default combineReducers({
  nodes: require('./nodes').default 
});