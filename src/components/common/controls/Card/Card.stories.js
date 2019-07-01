import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Card from './Card';

storiesOf('button', module)
  .addDecorator(getStory => (

    <View style={{ justifyContent: 'center', padding: 15, flex: 1 }}>{getStory()}</View>

  ))
  .addDecorator(withKnobs)
  .add('Simple Card', () => (
    <Card standard>This is a standard card</Card>
  ))
  .add('Card with shadow', () => (
    <Card withShadow>Card with shadow</Card>
  ))
  .add('Card with Left border', () => (
    <Card withLeftBorder> Card with left Border</Card>
  ))
  .add('Card with Right border', () => (
    <Card withRightBorder>Card with right border</Card>
  ))
  .add('Card with Border and Shadow', () => (
    <Card borderShadow>With shadow and border</Card>
  ))
  .add('Mid Width', () => (
    <Card midWidth>Middle Section</Card>
  ));
