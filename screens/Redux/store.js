import { createStore,applyMiddleWare } from " redux";
import thunk from "redux-thunk";


/* 
thunk has to be wrapped around a middleware  
since reducers only take simple action object  
we use thunk as the object we pass has an action 
*/
const store = createStore(
    rootReducer,
    applyMiddleWare(thunk)
);