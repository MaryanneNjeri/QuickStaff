import React, { Component }  from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import LoginForm from './LoginForm';
import { LinearGradient } from 'expo';


export default class Login extends Component{
    render(){
        return (

            <View style={styles.container}>
        
            <View style={styles.loginContainer}> 
          
         
        <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/image.png')} />
             </View>
    
                <View style={styles.formContainer}>
                       <LoginForm />
                </View> 
                
           </View>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#ff6347'
  
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
    } 
})
