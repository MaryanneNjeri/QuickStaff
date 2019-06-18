import { Permissions, Notifications } from 'expo';


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
  const token = await Notifications.getExpoPushTokenAsync();
  // post the token to the backend server and user details
  return fetch('https://8279f0ac.ngrok.io/user/682', {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      push_token: token,
    }),
  });
}
