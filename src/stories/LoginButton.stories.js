import React from 'react';
import { storiesOf } from '@storybook/react-native';
import LoginButton from '../components/storyComponents/LoginButton';

storiesOf('loginButton', module)
  .add('default', () => (
    <LoginButton onPress={() => console.log('logging in')} buttonText="Login" backgroundColor="#9ACD32" />
  ));
