import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

export default class Error extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>
          {' '}
An error occurred!
          {this.props.error.message}
        </Text>
      </View>
    );
  }
}
