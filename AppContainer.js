import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AuthNavigator} from "./navigation/Auth/AuthNavigator";
import AuthLoadingScreen from './src/screens/auth/AuthLoadingScreen';
import React from 'react';
import {AppNavigator} from "./navigation/App/AppNavigator";


export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthNavigator,
        App: AppNavigator

    },
    {
        initialRouteName: 'AuthLoading'

    }
    ),
);

