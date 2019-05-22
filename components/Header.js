import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { LinearGradient,Font } from 'expo'; 
import { Icon,Header} from 'react-native-elements';

const { width } = Dimensions.get('window');



  

export default class  CustomHeader extends React.Component {
    state = {
        fontLoaded: false,
      };
      async componentDidMount(){
        await Font.loadAsync({'shadows-into-light':require('../assets/fonts/ShadowsIntoLight.ttf')
       })
       this.setState({ fontLoaded: true });
     };
     signOutAsync = async () => {
      // await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    }
    render() { 
        const title = 'Event'
        return (
    // <LinearGradient
    // colors={['#0066ff','#0033cc']}
    // style={styles.container}> 
  <View style={styles.headerContainer}>
  { 
            this.state.fontLoaded ? (
              
//  <Text style={styles.headerText}>{title}</Text> 
<Header

backgroundColor={'rgb(0, 0, 128)'}
leftComponent={{ icon: 'menu', color: '#fff' }}
centerComponent={{ text: 'Events', style: { 
  color: 'white',
  fontSize: 22,
  textAlign:'center',
  fontFamily:'shadows-into-light' 
} }}
rightComponent={{ icon: 'person', color:'#fff',onPress:()=>{state.params.signOut}
}}
/>
           
            ) : null
        }

  </View> 
  // </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    width: width, 
   alignItems: 'center',
    
  },
  headerText: {
   
  }
});
