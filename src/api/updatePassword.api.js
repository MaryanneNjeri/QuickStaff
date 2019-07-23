import getEnvVars from '../../environment';

const { API_URL } = getEnvVars();

export default function updatePassword(object) {
  return fetch(`${API_URL}/update/password`, {
    method: 'POST',
    body: JSON.stringify(object),
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
