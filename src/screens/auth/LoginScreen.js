import React, { Component } from 'react';
import {
  View, StyleSheet, Image, AsyncStorage,
} from 'react-native';
import {
  Content, Container, Toast,
} from 'native-base';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validate from '../../components/lib/functions/auth/validate';
import { login } from '../../redux/login/action';
import LoginForm from '../../components/login/LoginForm';
import Loader from '../../components/general/Loader';
import primaryGradientArray from '../../../constants/utlis/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 0.5,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100,
  },

});
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      token: '',
      loading: false,
    };
  }


  signIn = async (email, password) => {
    const user = {
      email,
      password,
    };
    const { errors, isValid } = validate(user);
    if (!isValid) {
      this.setState({
        errors,
      });
    } else if (isValid) {
      this.setState({ errors: {}, loading: true });
      const { dispatch } = this.props;
      dispatch(login(user));
      AsyncStorage.getItem('token').then((data) => {
        if (data) {
          Toast.show({
            text: ' Successfully Log in',
            type: 'success',
            position: 'top',
            duration: 3000,
          });

          this.props.navigation.navigate('App');
        } else {
          Toast.show({
            text: 'Invalid login credentials',
            type: 'danger',
            position: 'top',
            duration: 3000,

          });

          this.props.navigation.navigate('Auth');
        }
      });
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) {
      return (
        <Loader />
      );
    }
    return (
      <Container>
        <LinearGradient
          colors={primaryGradientArray}
          style={styles.container}
        >
          <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
            <View style={styles.loginContainer}>
              <Image resizeMode="contain" style={styles.logo} source={require('../../../assets/images/logo.png')} />
            </View>

            <LoginForm {...this.state} signIn={this.signIn} />
          </Content>
        </LinearGradient>
      </Container>
    );
  }
}


LoginScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,

};
// we define the props
const mapStateToProps = state => ({
  loading: state.token.loading,
  error: state.token.Error,
});
export default connect(mapStateToProps)(LoginScreen);
