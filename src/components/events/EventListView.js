import React from 'react';
import {
  Body, Icon, List, ListItem, Right, Text, View,
} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import moment from 'moment/moment';
import { action } from '@storybook/addon-actions';
import EventListCard from './EventsListCard';
import FormInput from '../common/controls/Form/FormInput';

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
  };

  closeCard=() => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    const {
      assign, i, eventDetails, visible, closeSearch,
    } = this.props;
    const { isVisible } = this.state;
    return (
      <View>
        {visible ? (
          <View style={{ padding: 15 }}>
            <TouchableOpacity onPress={closeSearch} style={{ alignSelf: 'flex-end' }}>
              <Text style={{ fontSize: 15, fontWeight: '200', color: '#0052cc' }}>
                          Close
                <Icon
                  name="close"
                  type="EvilIcons"
                  style={{ fontSize: 15, color: '#0052cc' }}
                />
              </Text>
            </TouchableOpacity>
            <FormInput
              standard
              label="Search for events"
              floatingLabel
              onChangeText={action('clicked')}
            />
          </View>
        ) : null}
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
