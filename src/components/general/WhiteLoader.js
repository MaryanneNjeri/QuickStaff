import React from 'react';
import { Spinner, View, Text } from 'native-base';

// eslint-disable-next-line react/prefer-stateless-function
export default class WhiteLoader extends React.Component {
  render() {
    return (

      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Spinner style={{ height: 80 }} size="large" color="white" />
        <Text style={{ color: 'white' }}>Loading....</Text>

      </View>
    );
  }
}
