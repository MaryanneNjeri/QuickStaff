import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Button, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  onPress, label,
  height,
  width, color, borderRadius, borderWidth, textColor, icon, iconColor, before, size, iconOnly, after,
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
      borderWidth,
    }}
  >
    {iconOnly
      ? (
        <Icon
          name={icon}
          color={iconColor}
          size={size}
        />
      ) : null
      }

    {before ? (
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name={icon}
          color={iconColor}
          size={size}
        />
        <Text>{' '}</Text>
        <Text style={{
          color: textColor,
          textAlign: 'center',
          fontWeight: '200',
        }}
        >
          {label}
        </Text>
      </View>

    ) : (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{
          color: textColor,
          textAlign: 'center',
          fontWeight: '200',
        }}
        >
          {label}
        </Text>
        <Text>{' '}</Text>
        <Icon
          name={icon}
          color={iconColor}
          size={size}
        />
      </View>
    )}

  </Button>

);


export default Buttons;
