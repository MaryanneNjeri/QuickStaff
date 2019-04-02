import React from 'react';
import { StyleSheet,AsyncStorage, Text, View ,Button} from 'react-native';

export default class HomeScreen extends React.Component {
  _signOutAsync = async () => {
    // await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    
    return (
      <View>
        <Text> Hello world....</Text>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
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