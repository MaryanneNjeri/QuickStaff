import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View } from 'react-native';
import FormInput from './FormInput';

storiesOf('button', module)
  .addDecorator(getStory => (

    <View style={{ justifyContent: 'center', padding: 20, flex: 1 }}>{getStory()}</View>

  ))
  .add('Simple Input', () => (
    <FormInput onChangeText={action('change')} />
  ))
  .add('Input With Stacked Label', () => (
    <FormInput onChangeText={action('change')} label="Enter Name" stackedLabel />
  ))
  .add('Input With Floating Label', () => (
    <FormInput onChangeText={action('change')} label="Enter Name" floatingLabel />
  ))
  .add('Input With Left Icon', () => (
    <FormInput
      label="With left Icon"
      onChangeText={action('change')}
      leftIcon="edit"
      onPress={action('icon pressed')}
      size={20}
    />
  ))

  .add('Input With Right Icon', () => (
    <FormInput
      label="With right Icon"
      onChangeText={action('change')}
      rightIcon="edit"
      onPress={action('icon pressed')}
      size={20}
    />
  ))
  .add('Input with stacked label and Icon', () => (
    <FormInput
      label="with icon and label"
      value="hello world"
      floatingLabel
      onChangeText={action('clicked')}
      rightIcon="edit"
      onPress={action('icon pressed')}
      size={15}

    />
  ))
  .add('Input with floating label and Icon', () => (
    <FormInput
      label="with icon and label"
      floatingLabel
      onChangeText={action('clicked')}
      leftIcon="edit"
      onPress={action('icon pressed')}
      size={15}
    />
  ))
  .add('Rounded input', () => (
    <FormInput rounded placeholder="Enter email" roundedInput />
  ))
  .add('Password input', () => (
    <FormInput rounded placeholder="Enter Password" roundedInput secureTextEntry />

  ));
