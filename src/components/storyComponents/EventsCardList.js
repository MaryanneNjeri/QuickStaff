import React from 'react';
import {
  Body, Card, CardItem, Icon, Left, Right, Text, View,
} from 'native-base';
import { TouchableHighlight } from 'react-native';
import moment from 'moment';

import PropTypes from 'prop-types';

const styles = {
  card: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

    borderLeftWidth: 5,
    borderLeftColor: 'tomato',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  left: {
    paddingRight: 10,
    paddingLeft: 10,
    borderLeftWidth: 0.3,
    borderLeftColor: '#BDC3C7',
  },
  background: {
    backgroundColor: '#F8F8F8',
    padding: 15,

  },
};

const EventCardList = ({
  closeText, onPress,
  height,
  borderLeftColor,
  marginLeft, marginRight, marginTop, backgroundColor, borderLeftWidth, clientName, name, startsAt, venueName,
}) => (
  <View style={{
    backgroundColor,
    padding: 15,
  }}
  >
    <TouchableHighlight
      style={{ alignSelf: 'flex-end' }}
      onPress={onPress}
    >
      <Text style={{ fontWeight: '200', color: '#303B43', fontSize: 13 }}>
        {closeText}
        <Icon
          name="close"
          type="EvilIcons"
          style={{ fontSize: 20, color: '#303B43' }}
        />
      </Text>
    </TouchableHighlight>

    <Card style={{
      marginLeft,
      marginRight,
      marginTop,
      height,
      borderLeftWidth,
      borderLeftColor,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    }}
    >
      <CardItem>
        <Left>
          <Body>
            <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#0033cc' }}>{moment(startsAt).format('D')}</Text>
            <Text style={{ fontWeight: '200', fontSize: 20, color: '#0033cc' }}>{moment(startsAt).format('MMM')}</Text>
          </Body>
        </Left>
        <Body style={styles.left}>
          <Text style={{ fontSize: 15, fontWeight: '200' }}>{name}</Text>
          <Text note style={{ fontWeight: '200', fontSize: 12 }}>
              Client
            {clientName}
          </Text>
          <Text>{' '}</Text>
          <Text note style={{ fontWeight: '200', fontSize: 12 }}>
            <Icon
              type="Entypo"
              name="location-pin"
              style={{ color: '#303B43', fontSize: 10 }}
            />
            <Text>{' '}</Text>
            {venueName}
          </Text>

        </Body>
        <Right>
          <Text note style={{ fontSize: 10 }}>
            {' '}
            {moment(startsAt).fromNow()}
          </Text>
        </Right>
      </CardItem>
    </Card>
  </View>
);

EventCardList.propTypes = {
  marginRight: PropTypes.number.isRequired,
  marginLeft: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  borderLeftColor: PropTypes.string.isRequired,
  closeText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  borderLeftWidth: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  clientName: PropTypes.string.isRequired,
  venueName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  startsAt: PropTypes.string.isRequired,
};
export default EventCardList;
