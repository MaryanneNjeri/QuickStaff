import getEnvVars from '../../../environment';
import { getToken } from '../../components/lib/functions/auth/getAuthConfig';
// import getEvents from '../../api/getEvents';

const { API_URL } = getEnvVars();
export const FETCH_EVENTS_BEGIN = 'FETCH_EVENTS_BEGIN';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';


export const fetchEventsBegin = () => ({

  type: FETCH_EVENTS_BEGIN,

});

export const fetchEventsSuccess = events => ({

  type: FETCH_EVENTS_SUCCESS,
  payload: { events },

});


export const fetchEventsFailure = error => ({
  type: FETCH_EVENTS_FAILURE,
  payload: { error },

});
export function fetchEvents(list) {
  // console.log(list);
  function handleErrors(response) {
    console.log(response.status);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  return (dispatch) => {
    // first function  which is dispatched then fetch data from the api
    dispatch(fetchEventsBegin());
    getToken().then((token) => {
      const toke = token.replace(/^"(.*)"$/, '$1');
      const bearer = `Bearer ${toke}`;
      return fetch(`${API_URL}/staff/events?include=task.shift.event.client,task.shift.event.venue&starts_at=${list.starts_at || ''}&sort_dir=${list.sort_dir || ''}&sort=${list.sort || ''}&status=${list.status || ''}&name=${list.search || ''}&per_page=1&page=${list.offset}`, {
        method: 'GET',
        headers: {
          Authorization: bearer,

        },
      })

        .then(handleErrors)
        .then(response => response.json())

        .then((body) => {
          dispatch(fetchEventsSuccess(body));
          return body;
        })
        .catch(error => dispatch(fetchEventsFailure(error)));
    });
  };
}


// Handle HTTP errors since fetch won't.
