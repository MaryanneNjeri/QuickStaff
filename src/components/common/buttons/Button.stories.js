import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Dimensions, View, Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import Buttons from './Button';

const { width } = Dimensions.get('window');

storiesOf('button', module)
  .addDecorator(getStory => (

    <View style={{ justifyContent: 'center', padding: 15, flex: 1 }}>{getStory()}</View>

  ))
  .add('Standard', () => (
    <Buttons label="Standard" onPress={action('pressed')} />
  ))
  .add('Secondary', () => (
      <Buttons secondary label="Secondary" onPress={action('pressed')}>Secondary</Buttons>
  ))
  .add('Danger', () => (
    <Buttons color="red" label="Danger" textColor="white" onPress={action('pressed')} />
  ))
  .add('Success', () => (
    <Buttons color="green" label="Danger" textColor="white" onPress={action('pressed')} />
  ))
  .add('Full-width', () => (
    <Buttons label="full width" width={width - 50} textColor="white" onPress={action('pressed')} />
  ))
  .add('Icon only', () => (
    <Buttons icon="heart" iconOnly iconColor="red" size={25} onPress={action('pressed')} />
  ))
  .add('Icon before label', () => (
    <Buttons before icon="heart" size={20} label="Icon before label" iconColor="red" textColor="white" onPress={action('pressed')} />
  ))
  .add('Icon after lable', () => (
    <Buttons before={false} icon="heart" size={20} label="Icon after label" iconColor="red" textColor="white" onPress={action('pressed')} />
  ));
