import {combineReducers} from "redux";
import events from './events/reducer';
import token from './login/reducer';
import details from './profile/reducer';
import blockouts from './blockouts/reducer';

// we want to store the state from the reducer
export default combineReducers({
    events,
    token,
    details,
    blockouts

})