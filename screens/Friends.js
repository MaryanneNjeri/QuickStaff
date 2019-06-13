import React from  'react'; 
import { StyleSheet, Text, View,Button } from 'react-native';

export default class Friends extends  React.Component {
render() {
    return(
        /*
        the this.props.navigation as long as  the screen 
        is included in stacknavigato it inherits  many useful props from the navigation 
        object 
        */
        <View style={styles.container}>
        <Text>Add friend here .....</Text>
        <Button 
        title="Back to home "
        onPress={()=>
        this.props.navigation.navigate('HomeScreen')
        }
        />
        </View>
    );
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
