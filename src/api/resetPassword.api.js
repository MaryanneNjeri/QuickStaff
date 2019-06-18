import { API_URL } from '../../config/config';
import { getToken } from '../components/lib/functions/auth/getAuthConfig';

export default function resetPasswordRequest(userDetails) {
  function handleErrors(response) {
    console.log(response.status);
    if (!response.ok) {
      alert(response.status);
    } else if (response.ok) {
      alert('Success password has been reset');
    }
    return response;
  }
  getToken().then((token) => {
    const toke = token.replace(/^"(.*)"$/, '$1');
    const bearer = `Bearer ${toke}`;
    fetch(`${API_URL}/resetPassword`, {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        Authorization: bearer,
        Accept: 'application/json',
        'Content-Type': 'application/json',

      },
    }).then(handleErrors)
      .then(response => response.json())
      .then(body => body);
  });
}
