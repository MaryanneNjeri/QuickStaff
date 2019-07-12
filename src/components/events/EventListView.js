import React from 'react';
import {
  Body, Icon, List, ListItem, Right, Text, View,
} from 'native-base';
import { TouchableHighlight } from 'react-native';
import moment from 'moment/moment';

import EventListCard from './EventsListCard';


// eslint-disable-next-line react/prefer-stateless-function
export default class EventListView extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      filtered: [],
      events: [],
    };
  }

  viewListCard= () => {
    this.setState({
      isVisible: true,
    });
  };

  closeCard=() => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    const {
      assign, i, eventDetails,
    } = this.props;
    const { isVisible } = this.state;
    return (
      <View>

        <List key={i}>
          <ListItem key={i} onPress={() => eventDetails(assign.task.shift.event.id)}>
            <Body>
              <Text style={{ fontWeight: '200' }}>{assign.task.shift.event.name}</Text>
              <Text note>{moment(assign.task.shift.event.starts_at).format('LLLL')}</Text>
              <Text />
              <TouchableHighlight onPress={this.viewListCard}>
                <Text note style={{ fontSize: 10 }}>
view in calendar
                </Text>
              </TouchableHighlight>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
        { isVisible ? <EventListCard closeCard={this.closeCard} events={assign.task.shift.event} /> : null}

      </View>
    );
  }
}
