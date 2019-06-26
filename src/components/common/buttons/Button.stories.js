import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Dimensions, View } from 'react-native';
import Buttons from './Button';

const { width } = Dimensions.get('window');

storiesOf('button', module)
  .addDecorator(getStory => (

    <View style={{ justifyContent: 'center', padding: 15, flex: 1 }}>{getStory()}</View>

  ))
  .add('Standard', () => (
    <Buttons label="Standard" onPress={() => { console.log('standard'); }} />
  ))
  .add('Secondary', () => (

    <Buttons label="Secondary" color="white" textColor="black" borderWidth={2} onPress={() => {}} />
  ))
  .add('Danger', () => (
    <Buttons color="red" label="Danger" textColor="white" />
  ))
  .add('Success', () => (
    <Buttons color="green" label="Danger" textColor="white" />
  ))
  .add('Full-width', () => (
    <Buttons label="full width" width={width - 50} textColor="white" />
  ))
  .add('Icon only', () => (
    <Buttons icon="heart" iconOnly iconColor="red" size={25} />
  ))
  .add('Icon before label', () => (
    <Buttons before icon="heart" size={20} label="Icon before label" iconColor="red" textColor="white" />
  ))
  .add('Icon after lable', () => (
    <Buttons before={false} icon="heart" size={20} label="Icon after label" iconColor="red" textColor="white" />
  ));
