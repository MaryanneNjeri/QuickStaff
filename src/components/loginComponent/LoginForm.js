import React from 'react';
import {Content, Form, Input, Item} from "native-base";
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    render() {
        return (
            <View>
                <Form>
                    {this.props.errors ? <Text>{this.props.errors.email}</Text> : null
                    }
                    <Item rounded style={styles.input}>
                        <Input
                            style={{color: 'white'}}
                            placeholder='Email'
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            onChangeText={(email) => this.setState({email})}
                        />

                    </Item>
                    {this.props.errors ? <Text>{this.props.errors.password}</Text> : null
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
                                        this.props.signIn(this.state.email, this.state.password)
                                    }}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableHighlight>
                <TouchableOpacity style={styles.reset}
                                  onPress={this.props.onRedirect}>
                    <Text style={{color: 'white'}}>Password Reset </Text>
                </TouchableOpacity>
            </View>

        )
    }
}
const styles = StyleSheet.create({
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