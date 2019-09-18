import getEnvVars from '../../environment';

const { API_URL } = getEnvVars();
export default function resetPasswordRequest(userEmail) {
  const email = {
    email: userEmail,
  };
  return fetch(`${API_URL}/reset/password`, {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => response).catch((error) => {
      console.log(error);
    });
}
