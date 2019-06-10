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

import {Content, Container, Form, Input, Item, Toast, Spinner} from "native-base";
import {validateInput} from "../components/validateInput";
import {LinearGradient} from 'expo';
import {connect} from 'react-redux';
import {login} from '../../redux/login/action';
const _ = require('lodash');

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            token: '',
            loading: false

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
    signIn = async () => {
        const {email, password} = this.state;
        let user = {
            email: email,
            password: password
        };

        if (this.isValid()) {
            this.setState({errors: {}, loading: true});
            this.props.dispatch(login(user));

            AsyncStorage.getItem('token').then((data)=>{
                if (data) {
                    Toast.show({
                        text: " Successfully Log in",
                        type: "success",
                        position: "top",
                        duration: 3000
                    });
                    this.props.navigation.navigate('App')
                }
                else {
                    Toast.show({
                        text: "Invalid login credentials",
                        type: "danger",
                        position: "top",
                        duration: 3000

                    });
                    this.props.navigation.navigate('Auth');
                }
            });








        }
    }


    render() {
        const {errors} = this.state;
        const {loading} = this.props;
        if (loading) {
            return (
                <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                    <Spinner style={{height: 80}} size="large" color='tomato'/>

                </View>
            )
        }
        return (
            <Container>
                <LinearGradient
                    colors={['#ff6600', '#ff6699']}
                    style={styles.container}>


                    <Content contentContainerStyle={{justifyContent: 'center', flex: 1}}>


                        <View style={styles.loginContainer}>


                            <Image resizeMode="contain" style={styles.logo} source={require('./image.png')}/>
                        </View>

                        <Form>
                            {errors ? <Text>{errors.email}</Text> : null
                            }
                            <Item rounded style={styles.input}>
                                <Input
                                    style={{color: 'white'}}
                                    placeholder='Email'

                                    placeholderTextColor='rgba(225,225,225,0.7)'
                                    onChangeText={(email) => this.setState({email})}
                                />

                            </Item>
                            {errors ? <Text>{errors.password}</Text> : null
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
                                            onPress={() => {
                                                this.signIn(this.state.email, this.state.password)
                                            }}

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
const mapStateToProps = state => ({
    loading: state.token.loading,
    error: state.token.error,
});


// we connect our login form with redux
export default connect(mapStateToProps)(LoginScreen)

