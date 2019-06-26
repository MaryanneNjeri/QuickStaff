import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Dimensions, View } from 'react-native';
import Buttons from './Button';

const { width } = Dimensions.get('window');

storiesOf('button', module)
  .addDecorator(getStory => (

    <View style={{ justifyContent: 'center', padding: 15, flex: 1 }}>{getStory()}</View>

  ))
  .add('standard', () => (
    <Buttons label="Standard" onPress={() => { console.log('standard'); }} />
  ));
