import _ from 'lodash';
import React from 'react';
import {
  Body, Header, Left, Right, Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Header.styles';


export default ({ onPress, children, ...props }) => {
  const selectedStyle = _.reduce(props, (aggregate, value, prop) => (value && styles[prop]
    ? { ...aggregate, ...styles[prop] } : aggregate),
  styles.standard);

  return (

    <Header style={selectedStyle}>
      <Left>
        <Icon
          name={props.leftIcon}
          color={props.iconColor}
          size={props.size}
          onPress={onPress}
        />
      </Left>
      <Body>
        <Text style={{ fontSize: 20, fontWeight: '200', color: props.textColor }}>{children}</Text>
      </Body>
      <Right>
        <Icon
          name={props.icon}
          color={props.iconColor}
          size={props.size}
          onPress={onPress}
        />
      </Right>

    </Header>
  );
};
