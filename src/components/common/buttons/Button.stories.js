import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Dimensions, View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, color, select } from '@storybook/addon-knobs';
import Buttons from './Button';

const { width } = Dimensions.get('window');

storiesOf('button', module)
  .addDecorator(getStory => (

    <View style={{ justifyContent: 'center', padding: 15, flex: 1 }}>{getStory()}</View>

  ))
  .addDecorator(withKnobs)

  .add('Standard', () => (
    <Buttons onPress={action('pressed')}>Standard</Buttons>
  ))
  .add('Secondary', () => (
    <Buttons secondary onPress={action('pressed')}>Secondary</Buttons>
  ))
  .add('Danger', () => (

    <Buttons color="red" textColor="white" onPress={action('pressed')}> Danger</Buttons>
  ))
  .add('Success', () => (
    <Buttons color="green" textColor="white" onPress={action('pressed')}>Success</Buttons>
  ))
  .add('Full-width', () => (
    <Buttons width={width - 50} textColor="white" onPress={action('pressed')}>Full width</Buttons>
  ))
  .add('Icon only', () => (
    <Buttons icon="heart" iconColor="red" size={25} onPress={action('pressed')} />
  ))
  .add('Icon before label', () => (
    <Buttons before icon="heart" size={20} iconColor="red" textColor="white" onPress={action('pressed')}>Icon before label</Buttons>
  ))
  .add('Icon after label', () => (
    <Buttons before={false} icon="heart" size={20} iconColor="red" textColor="white" onPress={action('pressed')}>Icon after label</Buttons>
  ));
