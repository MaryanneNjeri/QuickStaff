import React from 'react';
import {
  Input, Item, Label,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import styles from './Form.styles';

export default ({
  floatingLabel, onChangeText, stackedLabel, rounded, label, ...props
}) => {
  const selectedStyle = _.reduce(props, (aggregate, value, prop) => (value && styles[prop]
    ? { ...aggregate, ...styles[prop] } : aggregate),
  styles.standard);
  return (
    <Item floatingLabel={floatingLabel} stackedLabel={stackedLabel} rounded={rounded}>

      <Label style={{ color: '#303B43', fontSize: 10 }}>
        {' '}
        <Icon
          onPress={props.onPress}
          name={props.leftIcon}
          size={props.size}
          color={props.color}
        />
        {label}
      </Label>

      <Input
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        onChangeText={onChangeText}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        style={selectedStyle}
      />
      <Icon
        name={props.rightIcon}
        size={props.size}
        color={props.color}
      />
    </Item>
  );
};
