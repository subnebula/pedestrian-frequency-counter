// To add reducers, import the reducer from the file
import { combineReducers } from 'redux';
import markers from './reducers/markers';
import nodes from './reducers/nodes'
import TableData from './reducers/TableData'

// This combines imported reducers into a single reducer
// that can be used to create a
const rootReducer = combineReducers({
  markers: markers,
  tableData: TableData
})

export default rootReducer;