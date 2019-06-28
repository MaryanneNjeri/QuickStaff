import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Button, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Button.styles';


export default ({ onPress, children, ...props }) => {
  const selectedStyle = _.reduce(props, (aggregate, value, prop) => (value && styles[prop]
    ? { ...aggregate, ...styles[prop] } : aggregate),
  styles.standard);

  return (
    <Button onPress={onPress} style={selectedStyle}>
      <Icon name={props.icon} size={props.size} color={props.iconColor} />
      <Text style={{ color: props.textColor }}>{children}</Text>
    </Button>
  );
};
