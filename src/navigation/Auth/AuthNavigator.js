import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../../screens/auth/LoginScreen';
import PasswordResetScreen from '../../screens/auth/PasswordResetScreen';

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: { header: null },

  },
  PasswordReset: {
    screen: PasswordResetScreen,
    navigationOptions: {
      title: 'Password Reset',
    },
  },
});
export default AuthNavigator;
