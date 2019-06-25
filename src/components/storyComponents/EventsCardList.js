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
    height: width / 3.5,
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
const events = {
  client_name: 'VonRueden-Hammes',
  name: 'Blaise Leuschke',
  starts_at: '2019-05-29 06:27:00"',
  venue_name: 'Ward Sauer MD',


};
const EventCardList = ({ closeText, onPress }) => (
  <View style={styles.background}>
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

    <Card style={styles.card}>
      <CardItem>
        <Left>
          <Body>
            <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#0033cc' }}>{moment(events.starts_at).format('D')}</Text>
            <Text style={{ fontWeight: '200', fontSize: 20, color: '#0033cc' }}>{moment(events.starts_at).format('MMM')}</Text>
          </Body>
        </Left>
        <Body style={styles.left}>
          <Text style={{ fontSize: 15, fontWeight: '200' }}>{events.name}</Text>
          <Text note style={{ fontWeight: '200', fontSize: 12 }}>
              Client
            {events.client_name}
          </Text>
          <Text>{' '}</Text>
          <Text note style={{ fontWeight: '200', fontSize: 12 }}>
            <Icon
              type="Entypo"
              name="location-pin"
              style={{ color: '#303B43', fontSize: 10 }}
            />
            <Text>{' '}</Text>
            {events.venue_name}
          </Text>

        </Body>
        <Right>
          <Text note style={{ fontSize: 10 }}>
            {' '}
            {moment(events.starts_at).fromNow()}
          </Text>
        </Right>
      </CardItem>
    </Card>
  </View>
);

export default EventCardList;
