import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { LinearGradient,Font } from 'expo'; 
import { Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');



  

export default class  Header extends React.Component {
    state = {
        fontLoaded: false,
      };
      async componentDidMount(){
        await Font.loadAsync({'shadows-into-light':require('../assets/fonts/ShadowsIntoLight.ttf')
       })
       this.setState({ fontLoaded: true });
     };

    render() { 
        const title = 'Event'
        return (
    <LinearGradient
    colors={['#0066ff','#0033cc']}
    style={styles.container}> 
  <View style={styles.headerContainer}>
  { 
            this.state.fontLoaded ? (
 <Text style={styles.headerText}>{title}</Text>
            ) : null
        }
 {/* <Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/> */}
  </View> 
  </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    width: width, 
    paddingBottom: 20,
    
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    textAlign:'center',
    fontFamily:'shadows-into-light'
  }
});
