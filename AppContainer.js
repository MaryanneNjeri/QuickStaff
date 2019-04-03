import { createAppContainer,createSwitchNavigator,createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import LoginScreen from './screens/LoginScreen';
import AuthLoadingScreen  from './screens/AuthLoadingScreen';
/*
A stack navigator works like a stacks dishes  each screen we navigate to pushed to the top of 
the screen  and when we hit the back button 
the screen pop off the top of the stack.
*/

// The switch navigator is meant to show one screen at a time 
const AppStack = createStackNavigator({
    HomeScreen:HomeScreen,
    PasswordReset: {screen:PasswordResetScreen,
        navigationOptions :{
         title: 'Password Reset'
        }
    }
})
 const AuthStack = createStackNavigator({
     Login:{screen:LoginScreen,
       navigationOptions:{ header: null }
    
    },

     
 });
 
export default  createAppContainer (createSwitchNavigator (
{  
   
    AuthLoading:AuthLoadingScreen,
    App:AppStack,
    Auth:AuthStack

    },
    {
      initialRouteName: 'AuthLoading'  
    }
    
 
));

