import React from 'react';
import { Form, Input, Item } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../common/buttons/Button';

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
    borderColor: 'rgba(225,225,225,0.2)',
  },

});
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
          <Item rounded style={styles.input}>
            <Input
              style={{ color: 'white' }}
              placeholder="Email"
              placeholderTextColor="rgba(225,225,225,0.7)"
              onChangeText={email => this.setState({ email })}
            />

          </Item>
          {errors ? <Text>{errors.password}</Text> : null
                    }
          <Item rounded style={styles.input}>
            <Input
              placeholder="Password"
              style={{ color: 'white' }}
              placeholderTextColor="rgba(225,225,225,0.7)"
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />

          </Item>

        </Form>
        <Button logIn onPress={() => { signIn(email, password); }} textColor="white">Log in</Button>

      </View>

    );
  }
}
LoginForm.propTypes = {
  signIn: PropTypes.func.isRequired,

};
