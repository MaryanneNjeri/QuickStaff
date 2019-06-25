import React from 'react';
import { storiesOf } from '@storybook/react-native/dist';
import LoginButton from '../components/storyComponents/LoginButton';

storiesOf('loginButton', module)
  .add('login', () => (
    <LoginButton onPress={() => console.log('logging in')} buttonText="Login" />
  ));
