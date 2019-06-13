import {combineReducers} from "redux";
import events from './eventReducer';
import token from './loginReducer';
import details from './profileReducer';
// we want to store the state from the reducer
export default combineReducers({
    events,
    token,
    details

})