import React from 'react';
import {
  Dimensions, View,
} from 'react-native';
import EventCalendar from 'react-native-event-calendar-customized';
import _ from 'lodash';
import { store } from '../../redux/store';


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
      const array1 = [];

      _.map(events.items.data, (assign, i) => (

        array1.push(this.getEvents(assign))
      ));
      this.setState({
        events: array1,
      });
    };

    getEvents = (assign) => {
      const start = assign.task.data.shift.data.event.data.starts_at;
      const end = assign.task.data.shift.data.event.data.ends_at;
      const title = assign.task.data.shift.data.event.data.name;
      const summary = assign.task.data.shift.data.event.data.venue.data.address;

      const obj = {
        start, end, title, summary,
      };
      return obj;
    };


    render() {
      const { events } = this.state;

      return (
        <View style={{ flex: 1, marginTop: 20 }}>
          <EventCalendar
            events={events}
            width={width}
            initDate="2019-07-22"
            size={60}
            scrollToFirst
          />


        </View>

      );
    }
}
