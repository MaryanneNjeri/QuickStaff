import {FETCH_PROFILE_BEGIN,FETCH_PROFILE_FAILURE,FETCH_PROFILE_SUCCESS} from "./profileAction";
const initialState = {
    user: {},
    loading: false,
    error: null
};
export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROFILE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                loading:false,
                user: action.payload.details
            };
        case FETCH_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                user: {}
            };
        default:

            return state;


    }
}