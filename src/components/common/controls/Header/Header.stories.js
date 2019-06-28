import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import Header from './Header';

storiesOf('Header', module)
  .addDecorator(getStory => (

    <View>{getStory()}</View>

  ))
  .add('Standard', () => (
    <Header standard>Standard</Header>
  ))
  .add('With Text Color', () => (
    <Header standard textColor="white">Standard with Text</Header>
  ))
  .add('With Right Icon', () => (
    <Header standard textColor="white" icon="user" iconColor="white" size={25} onPress={action('clicked')}>Right Icon</Header>
  ))
  .add('With Left Icon', () => (
    <Header standard leftIcon="search" iconColor="white" size={20}>Left Icon</Header>
  ));
