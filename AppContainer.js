import { createAppContainer,createSwitchNavigator,createStackNavigator,createBottomTabNavigator, NavigationActions } from 'react-navigation';
import EventScreen from './screens/EventScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import LoginScreen from './screens/LoginScreen'; 
import InviteScreen from './screens/InviteScreen'; 
import Settings from './screens/Settings'; 
import ScheduleScreen from './screens/ScheduleScreen'; 
import AuthLoadingScreen  from './screens/AuthLoadingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import React from 'react';
import CustomHeader from './components/Header';  
import { LinearGradient,Font } from 'expo';  
import { Icon} from 'react-native-elements';
import { Platform } from 'react-native';
import ActionSheet from 'react-native-action-sheet'; 
 

openActionSheet=()=>{
ActionSheet.showActionSheetWithOptions({
    options: ['Cancel', 'Logout'],
    destructiveButtonIndex: 1,
    cancelButtonIndex: 0,
    tintColor: 'blue',
    message:'Account Settings'
    },
    (buttonIndex) => {  
        if(buttonIndex == 1){
        
           NavigationActions.navigate({ routeName: 'Login' })
        }
});
}
/*
A stack navigator works like a stacks dishes  each screen we navigate to pushed to the top of 
the screen  and when we hit the back button 
the screen pop off the top of the stack.
*/

// The switch navigator is meant to show one screen at a time  



const AppStack = createStackNavigator({
    Event:{ screen: createBottomTabNavigator ({
        Home: EventScreen, 
        Schedule:ScheduleScreen,
        Invite:InviteScreen,
        Settings:Settings,
    },
    {
            defaultNavigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                  iconName = `ios-home`;
                  // Sometimes we want to add badges to some icons. 
                  // You can check the implementation below.
                  
                } else if (routeName === 'Settings') {
                  iconName = `ios-options`;
                } 
                else if(routeName ==='Schedule') {
                    iconName = `ios-calendar`
                }  
                else if(routeName ==='Invite') {
                    iconName = `ios-document`
                } 
        
                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
              },
            }),
            tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            },
          }

),
    navigationOptions:{  

        title: 'Events',
        headerBackground:(
        <LinearGradient
       colors={['#0066ff','#0033cc']} 
       style={{flex:1}}
        /> 
        ),
        headerTintColor: '#fff',
        headerTitleStyle:{
           },
        
        headerRight:(
            <Icon 
            name= 'person'
            size={30}
            color='white'
            onPress={this.openActionSheet}
        /> 
        )  
          
       
    }
    
    },
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
    },
 
     
 
),

);

