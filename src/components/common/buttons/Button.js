import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Button } from 'native-base';


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
const Buttons = ({
  onPress, label, height, width, color, borderRadius,
}) => (

  <Button
    onPress={onPress}
    style={{
      height,
      width,
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius,
      marginBottom: 20,
      backgroundColor: color,
      padding: 15,
    }}
  >
    <Text style={styles.text}>{label}</Text>
  </Button>

);


export default Buttons;
