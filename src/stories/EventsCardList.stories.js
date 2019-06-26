import React from 'react';
import { View, Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native/dist';
import EventsListCard from '../components/storyComponents/EventsCardList';

const { width } = Dimensions.get('window');
const events = {
  client_name: 'VonRueden-Hammes',
  name: 'Blaise Leuschke',
  starts_at: '2019-05-29 06:27:00',
  venue_name: 'Ward Sauer MD',


};
storiesOf('EventsListCard', module)
  .addDecorator(getStory => (
    <View style={{ flex: 1, justifyContent: 'center' }}>{getStory()}</View>
  ))
  .add('default', () => (
    <EventsListCard
      marginRight={5}
      onPress={() => { console.log('close card'); }}
      height={width / 3.5}
      borderLeftColor="tomato"
      marginTop={10}
      closeText="close"
      marginLeft={5}
      backgroundColor="#F8F8F8"
      borderLeftWidth={5}
      name={events.name}
      startsAt={events.starts_at}
      venueName={events.venue_name}
      clientName={events.client_name}
    />
  ));
