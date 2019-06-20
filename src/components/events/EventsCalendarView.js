import React from 'react';
import {
  Dimensions, View, Text,
} from 'react-native';
import EventCalendar from 'react-native-events-calendar';
import { store } from '../../redux/store';

const _ = require('lodash');

const { width } = Dimensions.get('window');


// eslint-disable-next-line react/prefer-stateless-function
export default class EventsCalendarView extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.getEventDetails();
  }

  getEventDetails = () => {
    const events = store.getState().events;

    _.map(events.items, (assign, i) => (

      this.getEvents(assign, i)
    ));
  };

  getEvents = (assign) => {

    _.map(assign, (item, i) => (
      this.getDetails(item, i)
    ));
  };

  getDetails = (item) => {
    const arr = [];
    if (!item.length) {
      const start = item.task.shift.event.starts_at;
      const end = item.task.shift.event.ends_at;
      const title = item.task.shift.event.name;
      const summary = item.task.shift.event.venue.address;
      const obj = {
        start, end, title, summary,
      };

      arr.push(obj);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <View>
          <EventCalendar

            width={width}
            initDate="2019-05-21"
            size={60}
            scrollToFirst
          />
        </View>
      </View>

    );
  }
}
