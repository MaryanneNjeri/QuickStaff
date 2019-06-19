import React from 'react';
import {
  Body, Icon, List, ListItem, Right, Text, View,
} from 'native-base';
import EventListCard from './EventsListCard';

// eslint-disable-next-line react/prefer-stateless-function
export default class EventListView extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  viewListCard= () => {
    this.setState({
      isVisible: true,
    });
  }

  render() {
    const { assign, i, eventDetails } = this.props;


    return (
      <View>

        <List key={i}>
          <ListItem key={i} onPress={() => eventDetails(assign.task.shift.event.id)}>
            <Body>
              <Text style={{ fontWeight: '200' }}>{assign.task.shift.event.name}</Text>
              <Text note>{Date(assign.task.shift.event.starts_at)}</Text>
              <Icon
                name="down"
                type="AntDesign"
                style={{ fontSize: 15, color: '#303B43' }}
                onPress={this.viewListCard}
              />
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
        { this.state.isVisible ? <EventListCard /> : null}

      </View>
    );
  }
}
