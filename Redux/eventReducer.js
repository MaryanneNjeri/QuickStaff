import { FETCH_EVENTS_BEGIN, FETCH_EVENTS_FAILURE, FETCH_EVENTS_SUCCESS } from "./eventAction";
/*
we'll have the reducer save the events in store when
when it receives the FETCH_PRODUCTS_SUCCESS
 */
const initialState = {
    items: [],
    loading: false,
    error: null
};
// remember reducers take two argue  the action and the state and then returns new state or an initial state

// reducers are used to alter the state thus in the screen there is no state to alter..
export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EVENTS_BEGIN:
            // set the state loading to true , as we show a spinner

            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_EVENTS_SUCCESS:
            // the events have been received thus alter the state of loading to false
            // as we have successfully gotten the events from the server replace

            return {

                ...state,
                loading: false,
                items: action.payload.events
            };
        case FETCH_EVENTS_FAILURE:
            // save the error so that it can be displayed
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            // in case of the three fail then return initial state
            return state;


    }
}
// the following are selectors and they are used to get defined parts of a state


