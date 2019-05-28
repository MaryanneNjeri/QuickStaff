import {combineReducers} from "redux";
import events from './eventReducer';
import token from './loginReducer';
// we want to store the state from the reducer
export default combineReducers({
    events,
    token
     
})