import { API_URL } from '../../config/config';

export default function updatePassword(object) {
  console.log(JSON.stringify(object));
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
