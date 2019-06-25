import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';


import './rn-addons';

configure(() => {
  loadStories();
}, module);


// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.

export default StorybookUI;
