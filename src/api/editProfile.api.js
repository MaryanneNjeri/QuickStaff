import { getToken } from '../components/lib/functions/auth/getAuthConfig';
// import { API_URL } from '../../config/config';


export default function editProfile(profile) {
  console.log(profile);
  function handleErrors(response) {
    console.log(response.status);
    if (!response.ok) {
      alert(response.status);
    } else if (response.ok) {
      alert('Profile has been successfully updated');
    }
    return response;
  }
  getToken().then((token) => {
    const toke = token.replace(/^"(.*)"$/, '$1');
    const bearer = `Bearer ${toke}`;
    fetch('https://fd056ff3.ngrok.io/user/682', {
      method: 'PATCH',
      body: JSON.stringify(profile),
      headers: {

        Accept: 'application/json',
        'Content-Type': 'application/json',

      },
    }).then(handleErrors)
      .then(response => response.json())
      .then(body => body);
  });
}
