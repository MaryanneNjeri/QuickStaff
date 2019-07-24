import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import getEnvVars from '../../../environment';
import registerForPushNotificationAsync from '../../api/auth.api';

const { API_URL } = getEnvVars();
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginBegin = () => ({

  type: LOGIN_BEGIN,

});

export const loginSuccess = token => ({

  type: LOGIN_SUCCESS,
  payload: { token },

});


export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: { error },

});


export function login(user) {
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  return (dispatch) => {
    dispatch(loginBegin());
    return fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(handleErrors)
      .then(response => response.json())
      .then((body) => {
        if (_.isEmpty(body.user.user_notification_token)) {
          console.log('hello');
          registerForPushNotificationAsync();
        } else if (body.user_notification_token !== null) {
          console.log('saved');
        }

        dispatch(loginSuccess(body));
        AsyncStorage.setItem('token', JSON.stringify(body.token));

        return body;
      })
      .catch(error => dispatch(loginFailure(error)));
  };
}
