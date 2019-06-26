import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import EventsCardList from '../storyComponents/EventsCardList';

const { width } = Dimensions.get('window');


// eslint-disable-next-line react/prefer-stateless-function
export default class EventsListCard extends React.Component {
  render() {
    const { closeCard, events } = this.props;
    return (
      <EventsCardList
        marginRight={5}
        startsAt={events.starts_at}
        onPress={closeCard}
        height={width / 3.5}
        borderLeftColor="tomato"
        name={events.name}
        marginTop={10}
        closeText="close"
        marginLeft={5}
        backgroundColor="#F8F8F8"
        venueName={events.venue.name}
        borderLeftWidth={5}
        clientName={events.client.name}
      />

    );
  }
}
EventsListCard.propTypes = {
  closeCard: PropTypes.func.isRequired,
};
