import {combineReducers} from "redux";
import events from './eventReducer';
import eventDetail from './eventDetailsReducer';
// we want to store the state from the reducer
export default combineReducers({
    events,
     // eventDetail
})