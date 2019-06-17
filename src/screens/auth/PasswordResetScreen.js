import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Image, TouchableHighlight,
} from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';
import { secondaryGradientArray } from '../../../constants/utlis/Colors';
import resetPasswordRequest from '../../api/resetPassword.api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,

  },
  text: {
    color: '#fff',
    fontSize: 20,

  },
  header: {
    alignItems: 'center',
    paddingBottom: 20,
    fontWeight: '200',

  },
  logo: {
    position: 'absolute',
    width: 400,
    height: 150,
  },
  card: {
    alignItems: 'center',
    flexGrow: 0.5,
    justifyContent: 'center',
    marginBottom: 20,

  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 20,
    padding: 10,
    color: '#fff',
    borderRadius: 30,

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
export default class PasswordResetScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
    };
  }


  componentDidMount() {
    this.setState({
      userDetails: {

        email: this.props.navigation.state.params.profile.email,

      },
    });
  }

  resetPassword=() => {
    const { userDetails } = this.state;
    resetPasswordRequest(userDetails);
  };

  render() {
    const icon = {
      url: 'https://img.icons8.com/clouds/400/000000/lock-2.png',
    };
    const { userDetails } = this.state;
    return (
      <LinearGradient
        colors={secondaryGradientArray}
        style={styles.container}
      >

        <View style={styles.container}>
          <View style={styles.card}>
            <Image resizeMode="contain" source={icon} style={styles.logo} />
          </View>
          <View style={styles.header}>
            <Text style={styles.text}>Reset Your Password ?</Text>

          </View>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgba(225,225,225,0.7)"
            value={userDetails.email}
            editable={false}
            onChangeText={(e) => {
              const user = userDetails;
              user.email = e;
              this.setState({ userDetails: user });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            placeholderTextColor="rgba(225,225,225,0.7)"
            secureTextEntry
            value={userDetails.oldPassword}
            onChangeText={(e) => {
              const user = userDetails;
              user.oldPassword = e;
              this.setState({ userDetails: user });
            }}
          />

          <TextInput
            style={styles.input}
            returnKeyType="done"
            placeholder="New Password"
            placeholderTextColor="rgba(225,225,225,0.7)"
            secureTextEntry
            value={userDetails.newPassword}
            onChangeText={(e) => {
              const user = userDetails;
              user.newPassword = e;
              this.setState({ userDetails: user });
            }}
          />
          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.resetPassword()}
          >
            <Text style={styles.buttonText}>Reset your password</Text>
          </TouchableHighlight>


        </View>


      </LinearGradient>
    );
  }
}

