import {API_URL} from '../config/config.js';

// we pass the id to the function then to the api...
export function fetchEventDetail(id) {
    return dispatch => {
        // first function  which is dispatched then fetch data from the api
        dispatch(fetchDetailEventsBegin());
        return fetch(API_URL + "/Assignments/"+id)
            .then(handleErrors)
            .then(response => response.json())
            .then(body => {

                dispatch(fetchDetailEventsSuccess(body));
                // console.log(json);
                return body;
            })
            .catch(error =>
                dispatch(fetchDetailEventsFailure(error))
            );
    };

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}
export const FETCH_DETAIL_EVENTS_BEGIN = 'FETCH_DETAIL_EVENTS_BEGIN';
export const FETCH_DETAIL_EVENTS_SUCCESS = 'FETCH_DETAIL_EVENTS_SUCCESS';
export const FETCH_DETAIL_EVENTS_FAILURE = 'FETCH_DETAIL_EVENTS_FAILURE';

export const fetchDetailEventsBegin = () => ({

    type: FETCH_DETAIL_EVENTS_BEGIN

});

export const fetchDetailEventsSuccess = eventDetail => ({

    type: FETCH_DETAIL_EVENTS_SUCCESSS,
    payload: {eventDetail}

});


export const fetchDetailEventsFailure = error => ({
    type: FETCH_DETAIL_EVENTS_FAILURE,
    payload: {error}

});