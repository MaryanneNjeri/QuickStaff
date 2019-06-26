import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Dimensions, View } from 'react-native';
import Button from './Button';

const { width } = Dimensions.get('window');

storiesOf('button', module)
  .addDecorator(getStory => (

    <View style={{ justifyContent: 'center', padding: 15, flex: 1 }}>{getStory()}</View>

  ))
  .add('login', () => (
    <Button
      color="#9ACD32"
      width={width - 50}
      height={45}
      borderRadius={30}
      buttonText="login"
      onPress={() => {
        console.log('logging in ...');
      }}
    />

  ))
  .add('apply', () => (
    <Button
      borderRadius={30}
      color="#0052cc"
      width={80}
      buttonText="Apply"
      onPress={() => {
        console.log('events dispatched');
      }}
    />
  ))
  .add('reset', () => (
    <Button
      color="#0052cc"
      width={80}
      borderRadius={30}
      buttonText="Reset"
      onPress={() => { console.log('reset...'); }}
    />
  ))
  .add('Events Between', () => (
    <Button
      color="#0052cc"
      borderRadius={30}
      width={140}
      buttonText="Events Between"
      onPress={() => { console.log('display date range picker'); }}
    />
  ))
  .add('Add Event', () => (
    <Button
      color="#0052cc"
      width={80}
      borderRadius={30}
      buttonText="Add Event"
      onPress={() => { console.log('Add event to calendar'); }}
    />
  ))
  .add('Edit Profile', () => (
    <Button
      width={80}
      color="#0052cc"
      buttonText="Edit Profile"
      borderRadius={5}
      onPress={() => { console.log('edit profile...'); }}
    />
  ));
