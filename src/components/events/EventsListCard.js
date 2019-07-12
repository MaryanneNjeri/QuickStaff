import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Icon, Body,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import Card from '../common/controls/Card/Card';

// eslint-disable-next-line react/prefer-stateless-function
export default class EventsListCard extends React.Component {
  render() {
    const { closeCard, events } = this.props;
    return (
      <View style={{ backgroundColor: '#F8F8F8', padding: 15 }}>
        <TouchableOpacity onPress={closeCard} style={{ alignSelf: 'flex-end' }}>
          <Text style={{ fontSize: 12, fontWeight: '200' }}>
Close
            <Icon
              name="close"
              type="EvilIcons"
              style={{ fontSize: 20, color: '#303B43' }}
            />
          </Text>
        </TouchableOpacity>
        <Text>{' '}</Text>
        <Card
          sections
          borderShadow
          leftItem={(
            <Text style={{ fontWeight: 'bold', color: '#0052cc', fontSize: 20 }}>
              {moment(events.starts_at).format('D')}
              <Text>{'\n'}</Text>
              {moment(events.starts_at).format('MMM')}
            </Text>
)}
          rightItem={<Text note>{moment(events.starts_at).fromNow()}</Text>}
        >
          {' '}
          <Text note style={{ fontSize: 12 }}>
            Event :

          </Text>
          {events.name}
          {'   '}
          {'\n'}
          <Text note style={{ fontSize: 12 }}>
            Client:
          </Text>
          {events.client.name}

          {'   '}
          {'\n'}
          <Text note style={{ fontSize: 12 }}>
            Venue:
          </Text>
          {events.venue.name}
          {'    '}
          {'\n'}
        </Card>
      </View>

    );
  }
}
EventsListCard.propTypes = {
  closeCard: PropTypes.func.isRequired,
};
