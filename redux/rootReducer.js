import {combineReducers} from "redux";
import events from './events/reducer';
import token from './loginReducer';
import details from './profileReducer';
import blockouts from './blockouts/blockoutReducer';

// we want to store the state from the reducer
export default combineReducers({
    events,
    token,
    details,
    blockouts

})