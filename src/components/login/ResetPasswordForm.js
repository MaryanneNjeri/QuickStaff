import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Image,
} from 'react-native';
import { store } from '../../redux/store';
import { validatePassword } from '../lib/functions/auth/validate';
import resetPasswordRequest from '../../api/resetPassword.api';
import Button from '../common/buttons/Button';
import FormInput from '../common/controls/Form/FormInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,

  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '200',

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
});

const icon = {
  url: 'https://img.icons8.com/clouds/400/000000/lock-2.png',
};

export default class ResetPasswordForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        email: '',
        oldPassword: '',
        newPassword: '',
      },
    };
  }

  componentDidMount() {
    const email = store.getState().details.user.email;
    this.setState({
      userDetails: {
        email,
        oldPassword: '',
        newPassword: '',
      },
    });
  }

    resetPassword=() => {
      const { userDetails } = this.state;

      const { errors, isValid } = validatePassword(userDetails);
      if (!isValid) {
        this.setState({
          errors,
        });
      } else if (isValid) {
        this.setState({ errors: {} });

        resetPasswordRequest(userDetails);
      }
    };

    render() {
      const { userDetails, errors } = this.state;
      return (

        <View style={styles.container}>
          <View style={styles.card}>
            <Image resizeMode="contain" source={icon} style={styles.logo} />
          </View>
          <View style={styles.header}>
            <Text style={styles.text}>Reset Your Password ?</Text>
          </View>
          <FormInput
            rounded
            roundedInput
            value={userDetails.email}
            placeholderTextColor="rgba(225,225,225,0.7)"
            onChangeText={(e) => {
              const user = userDetails;
              user.email = e;
              this.setState({ userDetails: user });
            }}
          />
          <Text>{' '}</Text>
          {errors ? <Text>{errors.oldPassword}</Text> : null}

          <FormInput
            rounded
            roundedInput
            value={userDetails.oldPassword}
            secureTextEntry
            placeholder="Current Password"
            placeholderTextColor="rgba(225,225,225,0.7)"
            onChangeText={(e) => {
              const user = userDetails;
              user.oldPassword = e;
              this.setState({ userDetails: user });
            }}
          />
          {errors ? <Text>{errors.newPassword}</Text> : null}
          <Text>{' '}</Text>
          <FormInput
            rounded
            roundedInput
            value={userDetails.newPassword}
            secureTextEntry
            placeholder="New Password"
            placeholderTextColor="rgba(225,225,225,0.7)"
            onChangeText={(e) => {
              const user = userDetails;
              user.newPassword = e;
              this.setState({ userDetails: user });
            }}
          />
          <Text>{' '}</Text>
          <Button fullWidth textColor="white" onPress={this.resetPassword}>Reset Password</Button>


        </View>
      );
    }
}
