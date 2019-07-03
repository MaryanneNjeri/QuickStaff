import React from 'react';
import { Form } from 'native-base';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../common/buttons/Button';
import FormInput from '../common/controls/Form/FormInput';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { errors, signIn } = this.props;
    const { email, password } = this.state;
    return (
      <View>
        <Form>

          {errors ? <Text>{errors.email}</Text> : null
          }
          <FormInput
            rounded
            roundedInput
            placeholder="Enter Email"
            placeholderTextColor="rgba(225,225,225,0.7)"
            onChangeText={email => this.setState({ email })}
          />
          {errors ? <Text>{errors.password}</Text> : null
          }
          <FormInput
            rounded
            roundedInput
            secureTextEntry
            placeholder="Enter Password"
            placeholderTextColor="rgba(225,225,225,0.7)"
            onChangeText={password => this.setState({ password })}
          />
        </Form>
        <Text>{' '}</Text>
        <Button logIn onPress={() => { signIn(email, password); }}>Log in</Button>

      </View>

    );
  }
}
LoginForm.propTypes = {
  signIn: PropTypes.func.isRequired,


};
