import {LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_BEGIN} from "./loginAction";

const initialState = {
    item: null,
    loading: false,
    error: null
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_BEGIN:


            return {
                ...state,
                loading: true,
                error: null
            };
        case LOGIN_SUCCESS:


            return {

                ...state,
                loading: false,
                item: action.payload.token
            };
        case LOGIN_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:

            return state;


    }
}