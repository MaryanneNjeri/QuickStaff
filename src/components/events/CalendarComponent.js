import React, { PureComponent } from 'react';
import { View, Text } from 'native-base';
import moment from 'moment';

export default class CalendarComponent extends PureComponent {
  render() {
    const { event } = this.props;

    return (
      <View>
        <Text style={{ fontWeight: '400', fontSize: 20 }}>{event.title}</Text>
        <Text>{' '}</Text>
        <Text>{event.summary}</Text>
        <Text style={{ fontWeight: '200' }}>
          {' '}
Starts:
          {moment(event.start).format('LLLL')}
          {' '}
        </Text>
        <Text style={{ fontWeight: '200' }}>
Ends:
          {moment(event.end).format('LLLL')}
        </Text>
      </View>
    );
  }
}
