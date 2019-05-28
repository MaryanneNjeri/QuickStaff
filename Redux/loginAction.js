import {API_URL} from '../config/config.js';


export function login (user){
    console.log(user);
    return dispatch =>{
        dispatch(loginBegin());
        return fetch(API_URL + "/staff/events/5",{
            method:'POST',body:JSON.stringify({user})

        }
        )

            // .then(handleErrors)
            // .then(response => response.json())
            // .then(body => {
            //
            //     dispatch(loginSuccess(body));
            //
            //     return body;
            // })
            // .catch(error =>
            //     dispatch(loginFailure(error))
            // );
    };

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);

        }
        return response;
    }

}
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginBegin = () => ({

    type: LOGIN_BEGIN

});

export const loginSuccess = token => ({

    type: LOGIN_SUCCESS,
    payload: {token}

});


export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: {error}

});