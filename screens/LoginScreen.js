import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import {LinearGradient} from 'expo';
import ValidationComponent from 'react-native-form-validator';
const _ = require('lodash');



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false
        }
    }

    onRedirect = () => {
        this.props.navigation.navigate('PasswordReset')
    }

    signIn = async () => {

        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App')
    }

    render() {

        return (
            <LinearGradient
                colors={['#ff6600', '#ff6699']}
                style={styles.container}>
                <StatusBar backgroundColor='blue' barStyle="light-content"/>

                <View style={styles.container}>


                    <View style={styles.loginContainer}>


                        <Image resizeMode="contain" style={styles.logo} source={require('../screens/image.png')}/>
                    </View>

                    <View style={styles.formContainer}>

                        <TextInput style={styles.input}
                                   autoCapitalize="none"
                                   onSubmitEditing={() => this.passwordInput.focus()}
                                   autoCorrect={false}
                                   keyboardType='email-address'
                                   placeholder='Email or Mobile Num'
                                   placeholderTextColor='rgba(225,225,225,0.7)'
                                   onChangeText={(email) => this.setState({email})}
                        />

                        <TextInput style={styles.input}
                                   returnKeyType="done"
                                   ref={(input) => this.passwordInput = input}
                                   placeholder='Password'
                                   placeholderTextColor='rgba(225,225,225,0.7)'
                                   onChangeText={(password) => this.setState({password})}
                                   secureTextEntry/>

                        <TouchableHighlight style={styles.buttonContainer}
                                            onPress={this.signIn}
                                            disabled={this.state.isLoading}
                        >
                            <Text style={styles.buttonText}>Log in</Text>
                        </TouchableHighlight>
                        <TouchableOpacity style={styles.reset}
                                          onPress={this.onRedirect}>
                            <Text style={{color: 'white'}}>Password Reset </Text>
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
    reset: {
        alignItems: 'center',

    },
    input: {
        borderRadius: 30,
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 20,
        padding: 10,
        color: '#fff'
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',

    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 0.5,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: 20,
        backgroundColor: '#9ACD32',
        paddingVertical: 15,


    },


})

