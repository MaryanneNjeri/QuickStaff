import { API_URL } from '../../config/config';
import { getToken } from '../components/lib/functions/auth/getAuthConfig';

export default function resetPasswordRequest(email) {
  function handleErrors(response) {
    console.log(response.status);
    if (!response.ok) {
      alert(response.message);
    } else if (response.ok) {
      alert('Verify Email');
    }
    return response;
  }
  getToken().then((token) => {
    const toke = token.replace(/^"(.*)"$/, '$1');
    const bearer = `Bearer ${toke}`;
    fetch(`${API_URL}/reset/password`, {
      method: 'POST',
      body: JSON.stringify(email),
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
