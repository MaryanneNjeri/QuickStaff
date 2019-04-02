import React, { Component }  from 'react';
import { View,Text,TextInput,StyleSheet,Image,StatusBar ,TouchableOpacity,AsyncStorage} from 'react-native';
import LoginForm from '../components/Login/LoginForm';
import { LinearGradient } from 'expo';



export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {email: ''};
        this.state = {password:''};
      }
    newUserValue = (value)  =>{
        this.setState({
            email: value ,
            password: value
        })
    } 
   
    signInAsyc = async(email)=>{ 
       alert('email' + email)
        // await AsyncStorage.setItem('userToken','abc');
        // this.props.navigation.navigate('App')
      }
    render(){ 
        const {email,password } = this.state;
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
                <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='email-address' 
                placeholder='Email or Mobile Num' 
                placeholderTextColor='rgba(225,225,225,0.7)'
                onChangeText={(email) => this.setState({email})}
     />
     <TextInput style= {styles.input}
              returnKeyType="done" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              onChangeText={(password) => this.setState({password})}
              secureTextEntry/> 
        
                       <TouchableOpacity style={styles.buttonContainer} 
                  onPress ={ () => this.signInAsyc(this.state.email,this.state.password)}>
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
    input:{
        height:40,
        backgroundColor: 'rgba(225,225,225,0.2)', 
        marginBottom:20,
        padding:10,
        color: '#fff'
      },
      buttonContainer:{
        backgroundColor: '#9ACD32',
        paddingVertical: 15 ,
       
       
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
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

