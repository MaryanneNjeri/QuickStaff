import React from 'react';
import {
  Icon, Text, View, Card, CardItem, Left, Body, Right,
} from 'native-base';
import { TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import moment from 'moment/moment';

const { width } = Dimensions.get('window');
// eslint-disable-next-line react/prefer-stateless-function
const styles = StyleSheet.create({
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
});

// eslint-disable-next-line react/prefer-stateless-function
export default class EventsListCard extends React.Component {
  render() {
    const { closeCard, event } = this.props;
    return (
      <View style={styles.background}>
        <TouchableHighlight
          style={{ alignSelf: 'flex-end' }}
          onPress={() => {
            closeCard();
          }}
        >
          <Text style={{ fontWeight: '200', color: '#303B43', fontSize: 13 }}>
            {' '}
                  Close
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
                <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#0033cc' }}>{moment(event.starts_at).format('D')}</Text>
                <Text style={{ fontWeight: '200', fontSize: 20, color: '#0033cc' }}>{moment(event.starts_at).format('MMM')}</Text>
              </Body>
            </Left>
            <Body style={styles.left}>
              <Text style={{ fontSize: 15, fontWeight: '200' }}>{event.name}</Text>
              <Text note style={{ fontWeight: '200', fontSize: 12 }}>
Client
                {event.client.name}
              </Text>
              <Text>{' '}</Text>
              <Text note style={{ fontWeight: '200', fontSize: 12 }}>
                <Icon
                  type="Entypo"
                  name="location-pin"
                  style={{ color: '#303B43', fontSize: 10 }}
                />
                <Text>{' '}</Text>
                {event.venue.name}
              </Text>

            </Body>
            <Right>
              <Text note style={{ fontSize: 10 }}>
                {' '}
                {moment(event.starts_at).fromNow()}
              </Text>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}
