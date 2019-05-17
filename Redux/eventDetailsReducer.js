import {FETCH_DETAIL_EVENTS_FAILURE,FETCH_DETAIL_EVENTS_SUCCESS,FETCH_DETAIL_EVENTS_BEGIN} from "./eventDetailsAction";
/*
we'll have the reducer save the events in store when
when it receives the FETCH_PRODUCTS_SUCCESS
 */
const initialState = {
    detail: [],
    loading: false,
    error: null
};
// remember reducers take two argue  the action and the state and then returns new state or an initial state

// reducers are used to alter the state thus in the screen there is no state to alter..
export default function eventsDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DETAIL_EVENTS_BEGIN:
            // set the state loading to true , as we show a spinner

            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_DETAIL_EVENTS_SUCCESS:
            // the events have been received thus alter the state of loading to false
            // as we have successfully gotten the events from the server replace

            return {

                ...state,
                loading: false,
                detail: action.payload.eventDetails
            };
        case FETCH_DETAIL_EVENTS_FAILURE:
            // save the error so that it can be displayed
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                detail: []
            };
        default:
            // in case of the three fail then return initial state
            return state;


    }
}