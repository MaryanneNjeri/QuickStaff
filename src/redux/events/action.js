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
  let startDate = '';
  let endDate = '';
  let sortBy = '';
  let switchValue = '';
  let sortDir = '';

  if (list) {
    startDate = list.startDate;
    endDate = list.untilDate;
    sortBy = list.sort_by;
    switchValue = list.switchValue;
    sortDir = list.sort_dir;
  }
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


      return fetch(`${API_URL}/staff/events?include=task.shift.event.client,task.shift.event.venue`, {
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
