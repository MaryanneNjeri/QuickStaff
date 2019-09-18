import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

// eslint-disable-next-line react/prefer-stateless-function
export default class Error extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>
          {' '}
An error occurred!
          {error.message}
        </Text>
      </View>
    );
  }
}
