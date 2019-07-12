import { getToken } from '../components/lib/functions/auth/getAuthConfig';
import { API_URL } from '../../config/config';


export default function editProfile(formData) {
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
    fetch(`${API_URL}/update/profile`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: bearer,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },

    }).then(handleErrors)
      .then(response => response.json())
      .then((response) => { console.log(response); });
  });
}
