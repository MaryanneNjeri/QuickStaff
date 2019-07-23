import { getToken } from '../components/lib/functions/auth/getAuthConfig';
import getEnvVars from '../../environment';

const { API_URL } = getEnvVars();
export default function editProfile(formData, id) {
  function handleErrors(response) {
    if (!response.ok) {
      alert(response.status);
    } else if (response.ok) {
      alert('Profile updated');
    }
    return response;
  }


  getToken().then((token) => {
    const toke = token.replace(/^"(.*)"$/, '$1');
    const bearer = `Bearer ${toke}`;
    fetch(`${API_URL}/profile/${id}`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: bearer,
        // Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },

    }).then(handleErrors)
      .then(response => response.json())
      .then((response) => { console.log(response); });
  });
}
