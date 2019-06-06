import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import EventScreen from './screens/EventScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import LoginScreen from './screens/LoginScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import BlockoutScreen from './screens/BlockoutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {LinearGradient} from 'expo';
import {Icon} from 'react-native-elements';


/*
A stack navigator works like a stacks dishes  each screen we navigate to pushed to the top of 
the screen  and when we hit the back button 
the screen pop off the top of the stack.
*/
const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {header: null}

    },
});
const AppStack = createStackNavigator({
    Event: {
        screen:
            createBottomTabNavigator({
                    Events: EventScreen,
                    Calendar: ScheduleScreen,
                    Profile: {
                        screen: ProfileScreen,
                        navigationOptions: {
                            header: {
                                visible: false
                            }
                        }
                    },
                },

                {
                    defaultNavigationOptions: ({navigation}) => ({

                        tabBarIcon: ({tintColor}) => {
                            const {routeName} = navigation.state;
                            let IconComponent = Ionicons;
                            let iconName;
                            if (routeName === 'Events') {
                                iconName = `ios-albums`;
                            } else if (routeName === 'Profile') {

                                iconName = `ios-person`;

                            } else if (routeName === 'Calendar') {
                                iconName = `ios-calendar`
                            }
                            // You can return any component that you like here!
                            return <IconComponent name={iconName} size={25} color={tintColor}/>;
                        },
                    }),

                    tabBarOptions: {
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    },
                }
            ),
        navigationOptions: {
            header: null
        }

    },
    EventDetails: {
        screen: EventDetailsScreen,
        navigationOptions: {
            title: 'Event Details',
            headerBackground: (
                <LinearGradient
                    colors={['#0066ff', '#0033cc']}
                    style={{flex: 1}}
                />
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '200'
            },

            headerRight: (
                <Icon
                    type='simple-line-icon'
                    name='options-vertical'
                    size={30}
                    color='white'
                    fontWeight='200'
                    onPress={() => this.openAction}
                />
            )
        }
    },
    PasswordReset: {
        screen: PasswordResetScreen,
        navigationOptions: {
            title: 'Password Reset'
        }
    },
    Notifications: {
        screen: NotificationScreen,
        navigationOptions: {
            title: 'Notification',

        }
    },
    Blockouts: {
        screen: BlockoutScreen,
        navigationOptions: {
            title: 'Blockouts',
            headerBackground: (
                <LinearGradient
                    colors={['#0066ff', '#0033cc']}
                    style={{flex: 1}}
                />
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '200'
            },
        }
    },

})


export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        App: AppStack

    },
    {
        initialRouteName: 'AuthLoading'

    }
    ),
);

