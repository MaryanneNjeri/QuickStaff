import { getToken } from '../components/lib/functions/auth/getAuthConfig';
import getEnvVars from '../../environment';

const { API_URL } = getEnvVars();
export default function acceptInvitation(id) {
  function handleErrors(response) {
    if (!response.ok) {
      alert(response.status);
    } else if (response.ok) {
      alert('Status Updated');
    }
    return response;
  }


  getToken().then((token) => {
    const toke = token.replace(/^"(.*)"$/, '$1');
    const bearer = `Bearer ${toke}`;
    fetch(`${API_URL}/staff/${id}/accept`, {
      method: 'GET',
      headers: {
        Authorization: bearer,

      },

    }).then(handleErrors)
      .then(response => response.json())
      .then((response) => { console.log(response); });
  });
}
