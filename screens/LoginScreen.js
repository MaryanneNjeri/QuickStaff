import React, { Component }  from 'react';
import { View,Text,StyleSheet,Image,StatusBar ,TouchableOpacity,AsyncStorage} from 'react-native';
import LoginForm from '../components/Login/LoginForm';
import { LinearGradient } from 'expo';



export default class Login extends Component{
    _signInAsyc = async()=>{
        await AsyncStorage.setItem('userToken','abc');
        this.props.navigation.navigate('App')
      }
    render(){
        return (
            <LinearGradient
            colors={['#ff6600','#ff6699']}
            style={styles.container}>
            <StatusBar backgroundColor= 'blue' barStyle="light-content"/>
          
            <View style={styles.container}>
            

            <View style={styles.loginContainer}> 
          
         
        <Image resizeMode="contain" style={styles.logo} source={require('../screens/image.png')} />
             </View>
    
                <View style={styles.formContainer}>
                       <LoginForm />
                       <TouchableOpacity style={styles.buttonContainer} 
                  onPress={this._signInAsyc}>
             <Text  style={styles.buttonText}>Sign in</Text>
</TouchableOpacity>   
     
                </View> 
                
           </View>
           </LinearGradient>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
        
  
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 0.5,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    buttonContainer:{
        backgroundColor: '#9ACD32',
        paddingVertical: 15 ,
       
       
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    } 

})

