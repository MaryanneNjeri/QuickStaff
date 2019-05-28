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
import {connect} from 'react-redux';
import {login} from '../Redux/loginAction';
const _ = require('lodash');



class LoginScreen extends Component {
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

        const{email,password} = this.state;
        let user={
            email:email,
            password:password
        }

        if (this.isValid()) {
            this.setState({errors:{},isLoading:true});
            this.props.dispatch(login(user))

        }


        // this.props.navigation.navigate('App')
    };

    render() {
        const {errors, isLoading} = this.state;

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
                                            onPress={()=>{this.signIn(this.state.email,this.state.password)}}
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


});
// we define the props

// we connect our login form with redux
// we dont need to have any piece of state in the component thus first parameter is null
// we also pass our login function that we are going to dispatch with the user data...
export  default connect (null)(LoginScreen)

