import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';

const styles = {
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 20,
    backgroundColor: '#9ACD32',
    paddingVertical: 15,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
};
const loginButton = ({ onPress, buttonText }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

loginButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,

};
export default loginButton;
