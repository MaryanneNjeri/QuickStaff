import {AsyncStorage } from 'react-native';

async function getToken() {

    const token = await AsyncStorage.getItem('token');
    return token



}
const token = getToken().then((token=>{
    return token
    })

    );

export const getAuthConfig = "Bearer " + token;