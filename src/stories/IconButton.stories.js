import React from 'react';
import { storiesOf } from '@storybook/react-native';
import IconButton from '../components/storyComponents/IconButton';

// we specify the name of the component we created
storiesOf('IconButton', module)
// here we add the stories of the component
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
