import { API_URL } from '../config/config.js';

//Naming redux actions that fetch data   

export const FETCH_EVENTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

// We export the first action and its has a type and optional payload 
export const fetchEventsBegin =()=>({
    type:FETCH_EVENTS_BEGIN
});
// the second action takes a type and a payload 
export const fetchEventsSuccess = events =>({
    type:FETCH_EVENTS_SUCCESS,
    payload: { events }
}) 

// the third action takes in a type and payload 
export const fetchEventsFailure = error =>({
    type: FETCH_EVENTS_FAILURE,
    payload: { error }
})
export function  fetchEvents(){
    return dispatch =>{
        // first function 
        dispatch(fetchEventsBegin());
        return fetch(API_URL + "/Assignments")
        .then(handleErrors)
        .then(response => response.json())
        .then(json=>{
            // second function 
            dispatch(fetchEventsSuccess(json.events));
            return json.products
        }) 
           // third function 
        .catch(error =>dispatch(fetchEventsFailure(error)));
    };
} 

//  function to handle any http errors since fetch wont 
 function handleErrors(response){
     if(!response.ok){
         throw Error (response.statusText);
     } 
     return response
 } 


 
 