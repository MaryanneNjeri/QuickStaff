import {API_URL} from '../../../config/config';
import {getToken} from "../../components/getAuthConfig";

export function fetchBlockouts() {
    return dispatch => {
        dispatch(fetchBlockoutsBegin());
        getToken().then(token => {
            var toke = token.replace(/^"(.*)"$/, '$1');
            var bearer = "Bearer " + toke;
            return fetch(API_URL + "/blockouts", {
                method: "GET",
                headers: {
                    Authorization: bearer,

                }
            })
                .then(handleErrors)
                .then(response => response.json())
                .then(body => {

                    dispatch(fetchBlockoutsSuccess(body));

                    return body;
                })
                .catch(error =>
                    dispatch(fetchBlockoutsFailure(error))
                );
        })
    };
    function handleErrors(response) {
        console.log(response.status);
        if (!response.ok) {
            throw Error(response.statusText);

        }
        return response;
    }
}

export const FETCH_BLOCKOUTS_BEGIN = 'FETCH_BLOCKOUTS_BEGIN';
export const FETCH_BLOCKOUTS_SUCCESS = 'FETCH_BLOCKOUTS_SUCCESS';
export const FETCH_BLOCKOUTS_FAILURE = 'FETCH_BLOCKOUTS_FAILURE';

export const fetchBlockoutsBegin = () => ({

    type: FETCH_BLOCKOUTS_BEGIN

});

export const fetchBlockoutsSuccess = blockouts => ({

    type: FETCH_BLOCKOUTS_SUCCESS,
    payload: {blockouts}

});


export const fetchBlockoutsFailure = error => ({
    type: FETCH_BLOCKOUTS_FAILURE,
    payload: {error}

});