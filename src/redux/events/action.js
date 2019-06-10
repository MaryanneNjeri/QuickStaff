import {API_URL} from '../../../config/config.js';
import {getToken} from "../../components/getAuthConfig";

export function fetchEvents() {
    return dispatch => {
        // first function  which is dispatched then fetch data from the api
        dispatch(fetchEventsBegin());
        getToken().then(token => {


            var toke = token.replace(/^"(.*)"$/, '$1');


            var bearer = "Bearer " + toke;
            return fetch(API_URL + "/staff/events", {
                method: "GET",
                headers: {
                    Authorization: bearer,

                }
            })
                .then(handleErrors)
                .then(response => response.json())
                .then(body => {

                    dispatch(fetchEventsSuccess(body));

                    return body;
                })
                .catch(error =>
                    dispatch(fetchEventsFailure(error))
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

export const FETCH_EVENTS_BEGIN = 'FETCH_EVENTS_BEGIN';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

export const fetchEventsBegin = () => ({

    type: FETCH_EVENTS_BEGIN

});

export const fetchEventsSuccess = events => ({

    type: FETCH_EVENTS_SUCCESS,
    payload: {events}

});


export const fetchEventsFailure = error => ({
    type: FETCH_EVENTS_FAILURE,
    payload: {error}

});
// Handle HTTP errors since fetch won't.


            


 
 