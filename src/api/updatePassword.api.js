import getEnvVars from '../../environment';
import { getToken } from '../components/lib/functions/auth/getAuthConfig';

const { API_URL } = getEnvVars();

export default function updatePassword(object) {
  getToken().then((token) => {
    const toke = token.replace(/^"(.*)"$/, '$1');
    const bearer = `Bearer ${toke}`;
    fetch(`${API_URL}/update/password`, {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        Authorization: bearer,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((response) => { alert(response.message); })
      .catch((error) => {
        console.log(error);
      });
  });
}
