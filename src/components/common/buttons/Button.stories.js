import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Dimensions, View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

const { width } = Dimensions.get('window');

storiesOf('button', module)
  .addDecorator(getStory => (

    <View style={{ justifyContent: 'center', padding: 15, flex: 1 }}>{getStory()}</View>

  ))
  .addDecorator(withKnobs)

  .add('Standard', () => (
    <Button base onPress={action('pressed')}>Standard</Button>
  ))
  .add('Primary', () => (
    <Button primary textColor="white" onPress={action('pressed')}>Primary</Button>
  ))
  .add('Secondary', () => (
    <Button secondary onPress={action('pressed')}>Secondary</Button>
  ))
  .add('Full Width Btn', () => (
    <Button fullWidth onPress={action('pressed')}>Full Width Button</Button>
  ))
  .add('Danger', () => (
    <Button danger textColor="white" onPress={action('pressed')}> Danger</Button>
  ))
  .add('Success', () => (
    <Button success textColor="white" onPress={action('pressed')}>Success</Button>
  ))
  .add('Login example', () => (
    <Button logIn textColor="white" onPress={action('pressed')}>Login</Button>
  ))
  .add('Icon only', () => (
    <Button icon="heart" iconColor="red" size={25} onPress={action('pressed')} />
  ))
  .add('Icon before label', () => (
    <Button before icon="heart" size={20} iconColor="red" textColor="white" onPress={action('pressed')}>Icon before label</Button>
  ))
  .add('Icon after label', () => (
    <Button before={false} icon="heart" size={20} iconColor="red" textColor="white" onPress={action('pressed')}>Icon after label</Button>
  ));
