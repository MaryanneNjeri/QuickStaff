import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import { Icon } from 'react-native-elements/src/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventScreen from '../../screens/events/EventScreen';
import ScheduleScreen from '../../screens/events/ScheduleScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import EventDetailsScreen from '../../screens/events/EventDetailsScreen';
import NotificationScreen from '../../screens/profile/NotificationScreen';
import BlockoutScreen from '../../screens/profile/BlockoutScreen';
import EditScreen from '../../screens/profile/EditScreen';
import storybook from '../../screens/profile/storybook';

const AppNavigator = createStackNavigator({
  Event: {
    screen:
        createBottomTabNavigator({
          Events: EventScreen,
          Calendar: ScheduleScreen,
          Profile: ProfileScreen,
        },
        {
          defaultNavigationOptions: ({ navigation }) => ({

            tabBarIcon: ({ tintColor }) => {
              const { routeName } = navigation.state;
              const IconComponent = Ionicons;
              let iconName;
              if (routeName === 'Events') {
                iconName = 'ios-albums';
              } else if (routeName === 'Profile') {
                iconName = 'ios-person';
              } else if (routeName === 'Calendar') {
                iconName = 'ios-calendar';
              }
              // You can return any component that you like here!
              return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
          }),

          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
        }),
    navigationOptions: {
      header: null,
    },

  },
  EventDetails: {
    screen: EventDetailsScreen,
    navigationOptions: {
      title: 'Event Details',
      headerBackground: (
        <LinearGradient
          colors={['#0066ff', '#0033cc']}
          style={{ flex: 1 }}
        />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '200',
      },

      headerRight: (
        <Icon
          type="simple-line-icon"
          name="options-vertical"
          size={30}
          color="white"
          fontWeight="200"
          onPress={() => this.openAction}
        />
      ),
    },
  },

  Notifications: {
    screen: NotificationScreen,
    navigationOptions: {
      title: 'Notification',

    },
  },
  Blockouts: {
    screen: BlockoutScreen,
    navigationOptions: {
      title: 'Blockouts',
      headerBackground: (
        <LinearGradient
          colors={['#0066ff', '#0033cc']}
          style={{ flex: 1 }}
        />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '200',
      },
    },
  },
  storybook: {
    screen: storybook,
    navigationOptions: {
      header: null,
    },
  },
  Edit: {
    screen: EditScreen,
    navigationOptions: {
      title: 'EditProfile',
      headerBackground: (
        <LinearGradient
          colors={['#0066ff', '#0033cc']}
          style={{ flex: 1 }}
        />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '200',
      },
    },
  },

});


export default AppNavigator;
