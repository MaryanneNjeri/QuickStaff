import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Form, Icon, Text, View,
} from 'native-base';
import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';
import Button from '../common/buttons/Button';
import FormInput from '../common/controls/Form/FormInput';
import updatePassword from '../../api/updatePassword.api';
import validatePassword from '../lib/functions/auth/validatePassword';


const styles = StyleSheet.create({
  modalButton: {
    alignItems: 'center',
    marginTop: 30,
    width: 150,
    flexDirection: 'row',

  },
});
export default class UpdatePasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      oldPassword: '',
      errors: {},
    };
  }

    updatePassword=() => {
      const { newPassword, oldPassword } = this.state;
      const object = {
        old_password: oldPassword,
        new_password: newPassword,
      };
      const { errors, isValid } = validatePassword(object);
      if (!isValid) {
        this.setState({
          errors,
        });
      } else if (isValid) {
        this.setState({ errors: {} });
        if (newPassword === oldPassword) {
          alert('Passwords should not match');
          this.setState({
            newPassword: '',
            oldPassword: '',
          });
        } else {
          updatePassword(object);
        }
      }
    }

    render() {
      const { newPassword, errors, oldPassword } = this.state;

      return (
        <View>
          <View style={{ marginTop: 22 }}>
            <View>
              <Icon
                type="FontAwesome"
                name="unlock-alt"
                style={{
                  fontSize: 80, color: '#0052cc', textAlign: 'center', fontWeight: '200',
                }}
              />
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '200', color: '#303B43' }}>Update Password</Text>
              </View>
              <View style={{ padding: 20 }}>
                <Form>
                  {errors ? <Text style={{ fontWeight: '200', fontSize: 14, color: 'tomato' }} note>{errors.oldPassword}</Text> : null
                    }
                  <FormInput
                    label="Old Password"
                    value={oldPassword}
                    floatingLabel
                    leftIcon="key"
                    size={13}
                    color="#303B43"
                    secureTextEntry
                    onChangeText={oldPassword => this.setState({ oldPassword })}
                  />

                  {errors ? <Text style={{ fontWeight: '200', fontSize: 14, color: 'tomato' }} note>{errors.newPassword}</Text> : null
                    }
                  <FormInput
                    label="New Password"
                    secureTextEntry
                    floatingLabel
                    value={newPassword}
                    leftIcon="key"
                    size={13}
                    color="#303B43"
                    onChangeText={newPassword => this.setState({ newPassword })}
                  />
                  <BarPasswordStrengthDisplay password={newPassword} />

                  <Text>{' '}</Text>
                </Form>
              </View>
              <View style={styles.modalButton}>
                <Button medium onPress={this.updatePassword}>Update Password</Button>
                <Text>{' '}</Text>
              </View>

            </View>
          </View>


        </View>

      );
    }
}
