import { API_URL } from '../../config/config';
import { getToken } from '../components/lib/functions/auth/getAuthConfig';

export default function getEvents() {
  getToken().then((token) => {
    const toke = token.replace(/^"(.*)"$/, '$1');
    const bearer = `Bearer ${toke}`;
    return clie(`${API_URL}/staff/general`, {
      method: 'GET',
      headers: {
        Authorization: bearer,

      },
    }).then(handleErrors)
      .then(response => response.json());
    // .then(body=>{
    //     return body
    // });
  });

  function handleErrors(response) {
    console.log(response.status);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}
