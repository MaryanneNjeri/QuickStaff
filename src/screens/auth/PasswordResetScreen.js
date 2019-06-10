import React from 'react';
import { StyleSheet, Text, View ,TextInput,Dimensions,Image,TouchableHighlight} from 'react-native';
import { LinearGradient,Font } from 'expo';

const { height, width } = Dimensions.get('window');
export default class PasswordResetScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {oldpassword: ''};
        this.state = {newpassword:''};
      }
      state = {
        fontLoaded: false,
      };

      // reauthenticate = () =>{

      // }
      resetPassword = () =>{
        // this.reauthenticate
        this.props.navigation.navigate('Event')
    } 

      async componentDidMount(){
         await Font.loadAsync({'shadows-into-light':require('../../../assets/fonts/ShadowsIntoLight.ttf')
        })
        this.setState({ fontLoaded: true });
      };
      
  render() {
    let icon = {
        url:"https://img.icons8.com/clouds/400/000000/lock-2.png"
    }
    return ( 
        <LinearGradient
        colors={['#0066ff','#0033cc']}
        style={styles.container}>

      <View style={styles.container}>
      <View style={styles.card}>
         <Image  resizeMode="contain" source={icon} style={styles.logo}/>
       </View> 
               
        { 
            this.state.fontLoaded ? (
                <View style={styles.header}>
          <Text style={styles.text}>Reset Your Password ?</Text> 
          
          
        </View>
            ) :null
        }
          
         
         <TextInput style= {styles.input}
              returnKeyType="done" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Current Password' 
              placeholderTextColor='rgba(225,225,225,0.7)'
              onChangeText={(oldpassword) => this.setState({oldpassword})}
              secureTextEntry/> 
        
        <TextInput style= {styles.input}
              returnKeyType="done" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='New Password' 
              placeholderTextColor='rgba(225,225,225,0.7)'
              onChangeText={(newpassword) => this.setState({newpassword})}
              secureTextEntry/>   
         <TouchableHighlight style={styles.buttonContainer} 
                  onPress ={ () => this.resetPassword(this.state.oldpassword,this.state.newpassword)}>
             <Text  style={styles.buttonText}>Reset your password</Text>
</TouchableHighlight>   
              
         
         </View>
        
     
      </LinearGradient>
    )
      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    
  },
 text:{
    color: '#fff',
    fontSize: 20,
    fontFamily:'shadows-into-light'
 },
  header: {
    alignItems: 'center',
    paddingBottom: 20
   
  },
  logo: {
    position: 'absolute',
    width: 400,
    height: 150
},
  card:{
    alignItems: 'center',
    flexGrow: 0.5,
    justifyContent: 'center',
    marginBottom:20
   
  },
  input :{
    height:40,
    backgroundColor: 'rgba(225,225,225,0.2)', 
    marginBottom:20,
    padding:10,
    color: '#fff',
    borderRadius:30,
    
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
   
},
  buttonContainer:{
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30 ,
    marginBottom: 20,
    backgroundColor: '#9ACD32',
    paddingVertical: 15 ,
   
   
},

});