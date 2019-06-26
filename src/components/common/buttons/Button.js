import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';


const styles = {
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '200',
  },
};
const Button = ({
  onPress, buttonText, height, width, color, borderRadius,
}) => (

  <TouchableOpacity
    onPress={onPress}
    style={{
      height,
      width,
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius,
      marginBottom: 20,
      backgroundColor: color,
      paddingVertical: 15,
    }}
  >
    <Text style={styles.text}>{buttonText}</Text>
  </TouchableOpacity>

);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  borderRadius: PropTypes.number.isRequired,

};
export default Button;
