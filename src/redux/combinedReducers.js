// To add reducers, import the reducer from the file
import { combineReducers } from 'redux';
import markers from './reducers/markers';
import TableData from './reducers/tableData'

// This combines imported reducers into a single reducer
// that can be used to create a
const rootReducer = combineReducers({
  markers: markers,
  tableData: TableData
})

export default rootReducer;