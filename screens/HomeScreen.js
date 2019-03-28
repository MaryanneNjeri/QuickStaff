import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import Login from '../components/Login/Login';
export default class HomeScreen extends React.Component {
  render() {
    return < Login/>
      
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