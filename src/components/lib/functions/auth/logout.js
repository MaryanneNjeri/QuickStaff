import { AsyncStorage } from 'react-native';
import { getToken } from './getAuthConfig';
import getEnvVars from '../../../../../environment';

const { API_URL } = getEnvVars();

export const logout = async () => {
  getToken().then((token) => {
    const toke = token.replace(/^"(.*)"$/, '$1');
    const bearer = `Bearer ${toke}`;

    fetch(`${API_URL}/logout`, {
      method: 'GET',
      headers: {
        Authorization: bearer,

      },
    })
      .then(response => response.json())
      .then((body) => {
        console.log(body);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  await AsyncStorage.removeItem('token');
};
