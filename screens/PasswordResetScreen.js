import React from 'react';
import { StyleSheet,AsyncStorage, Text, View ,Button} from 'react-native';

export default class HomeScreen extends React.Component {
 

  render() {
    
    return (
      <View>
        <Text> Password Reset</Text>

      </View>
    )
      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});