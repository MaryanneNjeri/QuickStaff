import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Forms from '../components/storyComponents/Form';

storiesOf('LoginForm', module)
  .addDecorator(getStory => (
    <View style={{ justifyContent: 'center', padding: 15, flex: 1 }}>{getStory()}</View>

  ))
  .add('email', () => (
    <Forms
      errorMessage="enter valid email"
      onChangeText={() => { console.log('email entered'); }}
      placeholder="Enter email"
      errors
      placeholderTextColor="white"
    />
  ))
  .add('password', () => (
    <Forms
      errorMessage="enter valid password"
      onChangeText={() => { console.log('password entered'); }}
      placeholder="Enter Password"
      errors={false}
      placeholderTextColor="white"
      secureTextEntry
    />
  ));
