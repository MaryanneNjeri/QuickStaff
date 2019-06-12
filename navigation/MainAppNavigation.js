import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AuthNavigator } from './Auth/AuthNavigator';
import AuthLoadingScreen from '../src/screens/auth/AuthLoadingScreen';
import AppNavigator from './App/AppNavigator';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthNavigator,
    App: AppNavigator,

  },
  {
    initialRouteName: 'AuthLoading',

  },
));
