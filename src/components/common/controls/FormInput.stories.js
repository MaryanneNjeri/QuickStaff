import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import FormInput from './FormInput';

// const value = text(label, defaultValue, groupId);
storiesOf('button', module)

  .add('Simple Input', () => (
    <FormInput onChange={action('change')} />
  ))
  .add('Input With Regular Label', () => (
    <FormInput onChange={action('change')} label="Enter Name" />
  ))
  .add('Input With Floating Label', () => (
    <FormInput onChange={action('change')} label="Enter Name" floatingLabel />
  ))
  .add('Input With Left Icon', () => (
    <FormInput onChange={action('change')} leftIcon={{ type: 'IonicIcon', name: 'home', onPress: action('icon pressed') }} />
  ))
  .add('Input With Right Icon', () => (
    <FormInput onChange={action('change')} />
  ));
