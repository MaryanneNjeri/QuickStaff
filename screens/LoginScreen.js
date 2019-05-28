import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import {Content, Container, Form, Input, Item,Icon} from "native-base";
import {validateInput} from "../components/validateInput";
import {LinearGradient} from 'expo';

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
    };

    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if (!isValid) {
            this.setState({
                errors
            })
        }
        return isValid;
    }

    signIn = () => {
        if (this.isValid()) {

        }


        // this.props.navigation.navigate('App')
    }

    render() {
        const {errors, isLoading} = this.state;
        console.log(errors)
        return (
            <Container>
                <LinearGradient
                    colors={['#ff6600', '#ff6699']}
                    style={styles.container}>


                    <Content contentContainerStyle={{justifyContent: 'center', flex: 1}}>


                        <View style={styles.loginContainer}>


                            <Image resizeMode="contain" style={styles.logo} source={require('../screens/image.png')}/>
                        </View>

                        <Form>
                            {errors ? <Text>{errors.email}</Text>:null
                            }
                                <Item rounded style={styles.input}>
                                    <Input
                                        style={{color: 'white'}}
                                        placeholder='Email'

                                        placeholderTextColor='rgba(225,225,225,0.7)'
                                        onChangeText={(email) => this.setState({email})}
                                    />

                                </Item>
                            {errors ? <Text>{errors.password}</Text>:null
                            }
                            <Item rounded style={styles.input}>
                                <Input
                                    placeholder='Password'
                                    style={{color: 'white'}}
                                    placeholderTextColor='rgba(225,225,225,0.7)'
                                    onChangeText={(password) => this.setState({password})}
                                    secureTextEntry/>

                            </Item>

                        </Form>
                        <TouchableHighlight style={styles.buttonContainer}
                                            onPress={this.signIn}
                                            disabled={isLoading}
                        >
                            <Text style={styles.buttonText}>Log in</Text>
                        </TouchableHighlight>
                        <TouchableOpacity style={styles.reset}
                                          onPress={this.onRedirect}>
                            <Text style={{color: 'white'}}>Password Reset </Text>
                        </TouchableOpacity>


                    </Content>
                </LinearGradient>
            </Container>
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
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 20,
        padding: 5,
        color: '#fff',
        borderColor: 'rgba(225,225,225,0.2)'
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

