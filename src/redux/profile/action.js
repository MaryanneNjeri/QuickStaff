import { API_URL } from '../../../config/config.js';
import { getToken } from '../../components/lib/functions/auth/getAuthConfig';

export const FETCH_PROFILE_BEGIN = 'FETCH_PROFILE_BEGIN';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const fetchProfileBegin = () => ({

  type: FETCH_PROFILE_BEGIN,

});

export const fetchProfileSuccess = details => ({

  type: FETCH_PROFILE_SUCCESS,
  payload: { details },

});


export const fetchProfileFailure = error => ({
  type: FETCH_PROFILE_FAILURE,
  payload: { error },

});
export function fetchProfile() {
  function handleErrors(response) {
    console.log(response.status);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  return (dispatch) => {
    dispatch(fetchProfileBegin());
    getToken().then((token) => {
      const toke = token.replace(/^"(.*)"$/, '$1');
      const bearer = `Bearer ${toke}`;
      return fetch(`${API_URL}/user`, {
        method: 'GET',
        headers: {
          Authorization: bearer,
        },
      })
        .then(handleErrors)
        .then(response => response.json())
        .then((body) => {
          dispatch(fetchProfileSuccess(body));
          return body;
        })
        .catch(error => dispatch(fetchProfileFailure(error)));
    });
  };
}
