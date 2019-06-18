import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo';
import { secondaryGradientArray } from '../../../constants/utlis/Colors';
import ResetPasswordForm from '../../components/login/ResetPasswordForm';

// eslint-disable-next-line react/prefer-stateless-function
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,

  },
});
export default class PasswordResetScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={secondaryGradientArray}
        style={styles.container}
      >
        <View style={styles.container}>
          <ResetPasswordForm />
        </View>
      </LinearGradient>
    );
  }
}
