import React from 'react';
import { Form, Item, Input } from 'native-base';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

const styles = {
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 20,
    padding: 5,
    color: '#fff',
    borderColor: 'rgba(225,225,225,0.2)',
  },
};
const Forms = ({
  placeholder, placeholderTextColor, onChangeText, errors, errorMessage,
}) => (

  <Form>
    {errors ? <Text>{errorMessage}</Text> : null
          }
    <Item rounded style={styles.input}>
      <Input
        style={{ color: 'white' }}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
      />
    </Item>

  </Form>


);
Form.propTypes = {
  placeholder: PropTypes.string.isRequired,
  placeholderTextColor: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  errors: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,

};
export default Forms;
