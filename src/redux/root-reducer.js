//the actual code that combines all the steps together.
import {combineReducers} from 'redux';
import userReducer from './user/user-reducer.js'

export default combineReducers({
	user:userReducer
})
