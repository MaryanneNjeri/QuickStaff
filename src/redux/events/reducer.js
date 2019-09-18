import { FETCH_EVENTS_BEGIN, FETCH_EVENTS_FAILURE, FETCH_EVENTS_SUCCESS } from './action';

const initialState = {
  items: [],
  loading: false,
  error: null,
  meta: {},
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_BEGIN:
      // set the state loading to true , as we show a spinner
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_EVENTS_SUCCESS:
      // the general have been received thus alter the state of loading to false
      // as we have successfully gotten the general from the server replace

      return {
        ...state,
        loading: false,
        items: action.payload.events,
        meta: action.payload.events.meta,
      };
    case FETCH_EVENTS_FAILURE:
      // save the error so that it can be displayed
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
        meta: {},
      };
    default:
      // in case of the three fail then return initial state
      return state;
  }
}
