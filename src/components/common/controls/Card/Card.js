import _ from 'lodash';
import React from 'react';
import {
  Card, CardItem, Text, Left, Right, Body,
} from 'native-base';
import styles from './Card.styles';


export default ({
  onPress, children, sections, ...props
}) => {
  const selectedStyle = _.reduce(props, (aggregate, value, prop) => (value && styles[prop]
    ? { ...aggregate, ...styles[prop] } : aggregate),
  styles.standard);

  return (sections
    ? (
      <Card style={selectedStyle}>
        <CardItem>
          <Left>
            <Body>
              <Text>{props.leftItem}</Text>
            </Body>
          </Left>
          <Body>
            <Text style={selectedStyle}>
              {children}
            </Text>
          </Body>
          <Right>
            <Text style={selectedStyle}>
              {' '}
              {props.rightItem}
            </Text>
          </Right>
        </CardItem>
      </Card>
    ) : (
      <Card style={selectedStyle}>
        <CardItem>
          <Text style={{ fontWeight: '200', fontSize: 13 }}>
            {children}
          </Text>

        </CardItem>
      </Card>
    )
  );
};
