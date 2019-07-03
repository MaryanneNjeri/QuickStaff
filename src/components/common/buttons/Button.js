import _ from 'lodash';
import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Button.styles';


export default ({ onPress, children, ...props }) => {
  const selectedStyle = _.reduce(props, (aggregate, value, prop) => (value && styles[prop]
    ? { ...aggregate, ...styles[prop] } : aggregate),
  styles.standard);


  return (
    <Button onPress={onPress} style={selectedStyle}>
      <Icon name={props.icon} size={props.size} color={props.iconColor} iconStyle={{ justifyContent: 'center', alignItems: 'center' }} />
      <Text style={{ color: 'white', fontWeight: '200' }}>
        {children}
      </Text>
    </Button>
  );
};
