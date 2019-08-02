import React from 'react';
import { Dimensions } from 'react-native';
import { View } from 'native-base';
import _ from 'lodash';
import EventCalendar from 'react-native-event-calendar-customized';


const { width } = Dimensions.get('window');
// eslint-disable-next-line react/prefer-stateless-function
export default class CalendarView extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.creatingEvents();
  }

  creatingEvents =() => {
    const { data } = this.props;
    const events = [];
    _.map(data, (event, i) => (
      events.push({
        start: `${event.starts_at}`, end: `${event.ends_at}`, title: `${event.recurrence_text}`, summary: `${event.reason}`,
      })
    ));
    this.setState({
      events,
    });
  };

  render() {
    const { events } = this.state;

    return (
      <View>
        <EventCalendar
          initDate="2019-06-21"
          width={width}
          events={events}
          size={60}
          scrollToFirst
        />
      </View>
    );
  }
}
