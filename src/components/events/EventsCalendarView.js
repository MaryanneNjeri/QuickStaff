import React from 'react';
import {
  Dimensions, View,
} from 'react-native';
import EventCalendar from 'react-native-event-calendar-customized';
import { store } from '../../redux/store';
import EventsCard from './EventsCard';

const _ = require('lodash');

const { width } = Dimensions.get('window');


// eslint-disable-next-line react/prefer-stateless-function
export default class EventsCalendarView extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      isVisible: false,

    };
  }


  componentDidMount() {
    this.getEventDetails();
  }

    getEventDetails = () => {
      const events = store.getState().events;
      let array1 = [];

      _.map(events.items, (assign, i) => (

        array1 = this.getEvents(assign, i)
      ));
      this.setState({
        events: array1,
      });
    };

    getEvents = (assign) => {
      const arr = [];
      _.map(assign, (item, i) => (
        arr.push(this.getDetails(item, i))

      ));
      return arr;
    };

    getDetails = (item) => {
      if (!item.length) {
        const start = item.task.shift.event.starts_at;
        const end = item.task.shift.event.ends_at;
        const title = item.task.shift.event.name;
        const summary = item.task.shift.event.venue.address;

        const obj = {
          start, end, title, summary,
        };
        return obj;
      }
    };

    eventDetails = (events) => {
      return (<EventsCard events={events} closeCard={closeCard}/>);
    }

    closeCard = () => {
      this.setState({
        isVisible: false,
      });
    }


    render() {
      const { events } = this.state;
      return (
        <View style={{ flex: 1, marginTop: 20 }}>
          <EventCalendar
            events={events}
            eventTapped={this.eventDetails}
            keyExtractor={events => `key-${events.id}`}
            width={width}
            initDate="2019-05-21"
            size={60}
            scrollToFirst
          />


        </View>

      );
    }
}
