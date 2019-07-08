import { Permissions, Notifications } from 'expo';
import { API_URL } from '../../config/config';
import { getToken } from '../components/lib/functions/auth/getAuthConfig';


export default async function registerForPushNotificationAsync() {
  const { status: exstingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS,
  );
  // only ask if permissions have not already been determined, because ios wont
    // prompt the user a second time
  let finalStatus = exstingStatus;
  if (exstingStatus !== 'granted') {
    // this will only work on ios  as permission is android are  already granted
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  // stop here if the user did not grant any permission
  if (finalStatus !== 'granted') {
    return;
  }
  // get the token that uniquely identifies this device
  const push = await Notifications.getExpoPushTokenAsync();
  const token1 = {
    device_token: push,
  };
  getToken().then((token) => {
    const toke = token.replace(/^"(.*)"$/, '$1');
    const bearer = `Bearer ${toke}`;
    return fetch(`${API_URL}/notification/token`, {
      method: 'POST',
      headers: {
        Authorization: bearer,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(token1),
    }).then(response => response.json())
      .then((response) => { console.log(response); }).catch((error) => {
        console.log(error);
      });
  });
}
