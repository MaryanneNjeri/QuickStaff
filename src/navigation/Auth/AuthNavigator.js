import {createStackNavigator} from "react-navigation";
import LoginScreen from "../../src/screens/auth/LoginScreen";

export const AuthNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {header: null}

    },
});