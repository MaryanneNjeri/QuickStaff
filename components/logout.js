import {API_URL} from '../config/config.js';
import {AsyncStorage} from "react-native";
import {getToken} from "../components/getAuthConfig";


export const  logout= async () =>{
    getToken().then(token => {
        var toke = token.replace(/^"(.*)"$/, '$1');
        var bearer = "Bearer " + toke;

        fetch(API_URL + "/logout", {method: "GET", headers: {
                Authorization: bearer,

            }
        })
            .then(response => response.json())
            .then(body => {
                console.log(body);

            })
            .catch(error => {
                console.log(error)
            });

    });
    await AsyncStorage.removeItem('token');

};