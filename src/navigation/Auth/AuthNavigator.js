import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../../screens/auth/LoginScreen';

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: { header: null },

  },
});
export default AuthNavigator;