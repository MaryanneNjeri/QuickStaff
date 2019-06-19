import React from 'react';
import {
  Body, Icon, List, ListItem, Right, Text, View,
} from 'native-base';

// eslint-disable-next-line react/prefer-stateless-function
export default class EventListView extends React.Component {
  render() {
    const { assign, i, eventDetails } = this.props;

    return (
      <View>

        <List key={i}>
          <ListItem key={i} onPress={() => eventDetails(assign.task.shift.event.id)}>
            <Body>
              <Text style={{ fontWeight: '200' }}>{assign.task.shift.event.name}</Text>
              <Text note>{Date(assign.task.shift.event.starts_at)}</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </View>
    );
  }
}
