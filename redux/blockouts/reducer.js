import {FETCH_BLOCKOUTS_FAILURE, FETCH_BLOCKOUTS_SUCCESS, FETCH_BLOCKOUTS_BEGIN} from './action';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function blockoutReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BLOCKOUTS_BEGIN:

            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_BLOCKOUTS_SUCCESS:
            return {

                ...state,
                loading: false,
                items: action.payload.blockouts
            };
        case FETCH_BLOCKOUTS_FAILURE:

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