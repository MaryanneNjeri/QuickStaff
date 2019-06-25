import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import IconButton from '../components/IconButton';

// we specify the name of the component we created
storiesOf('IconButton', module)
  .add('on', () => (
    <IconButton
      icon="heart"
      color="#333"
      onPress={() => console.log('un-favorited!')}
    />
  ))
  .add('off', () => (
    <IconButton
      icon="heart-o"
      color="#333"
      onPress={() => console.log('favorited!')}
    />
  ));
