import React, { Component }  from 'react';
import { View,Text,StyleSheet,Image,StatusBar } from 'react-native';
import LoginForm from './LoginForm';
import { LinearGradient } from 'expo';



export default class Login extends Component{
    render(){
        return (
            <LinearGradient
            colors={['#ff6600','#ff6699']}
            style={styles.container}>
            <StatusBar backgroundColor= 'blue' barStyle="light-content"/>
          
            <View style={styles.container}>
            

            <View style={styles.loginContainer}> 
          
         
        <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/image.png')} />
             </View>
    
                <View style={styles.formContainer}>
                       <LoginForm />
                </View> 
                
           </View>
           </LinearGradient>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
  
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
