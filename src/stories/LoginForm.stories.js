import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { LinearGradient } from 'expo';
import LoginForm from '../components/storyComponents/LoginForm';
import primaryGradientArray from '../../constants/utlis/Colors';

storiesOf('LoginForm', module)
  .addDecorator(getStory => (
    <LinearGradient colors={primaryGradientArray} style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', padding: 15, flexGrow: 1 }}>{getStory()}</View>
    </LinearGradient>
  ))
  .add('email', () => (
    <LoginForm
      errorMessage="enter valid email"
      onChangeText={() => { console.log('email entered'); }}
      placeholder="Enter email"
      errors
      placeholderTextColor="white"
    />
  ))
  .add('password', () => (
    <LoginForm
      errorMessage="enter valid password"
      onChangeText={() => { console.log('password entered'); }}
      placeholder="Enter Password"
      errors={false}
      placeholderTextColor="white"
      secureTextEntry
    />
  ));
