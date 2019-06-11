import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import EventScreen from "../../src/screens/events/EventScreen";
import ScheduleScreen from "../../src/screens/events/ScheduleScreen";
import ProfileScreen from "../../src/screens/profile/ProfileScreen";
import EventDetailsScreen from "../../src/screens/events/EventDetailsScreen";
import {LinearGradient} from "expo";
import {Icon} from "react-native-elements";
import PasswordResetScreen from "../../src/screens/auth/PasswordResetScreen";
import NotificationScreen from "../../src/screens/profile/NotificationScreen";
import BlockoutScreen from "../../src/screens/profile/BlockoutScreen";

export const AppNavigator = createStackNavigator({
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