import { createAppContainer,createSwitchNavigator,createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import EventScreen from './screens/EventScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import LoginScreen from './screens/LoginScreen'; 
import Friends from './screens/Friends';
import AuthLoadingScreen  from './screens/AuthLoadingScreen';
/*
A stack navigator works like a stacks dishes  each screen we navigate to pushed to the top of 
the screen  and when we hit the back button 
the screen pop off the top of the stack.
*/

// The switch navigator is meant to show one screen at a time 
const AppStack = createStackNavigator({
    EventScreen:{screen:EventScreen,
        navigationOptions:{
            title: 'Events'
        }
    
    },
    PasswordReset: {screen:PasswordResetScreen,
        navigationOptions :{
         title: 'Password Reset'
        }
    }
}) 
const TabNavigator = createBottomTabNavigator ({
    Event:EventScreen,
    Friends:Friends
});
const AuthStack = createStackNavigator({
    Login:{screen:LoginScreen,
    navigationOptions:{ header: null }
    
    },

     
 });
 
export default  createAppContainer ( TabNavigator ,createSwitchNavigator (
{  
   
    AuthLoading:AuthLoadingScreen,
    App:AppStack,
    Auth:AuthStack

    },
    {
      initialRouteName: 'AuthLoading'  
    },
 
    
 
));

