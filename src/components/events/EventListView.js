import React from 'react';
import {
  Body, Icon, List, ListItem, Right, Text, View,
} from 'native-base';
import { TouchableHighlight, Alert } from 'react-native';
import moment from 'moment/moment';
import acceptInvitation from '../../api/acceptInvitation.api';
import declineInvitation from '../../api/declineInvitation.api';
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
  };

  closeCard=() => {
    this.setState({
      isVisible: false,
    });
  };


  showAlert=(id) => {
    Alert.alert('Accept Invitation', 'Accept or Decline the invitation', [
      { text: 'Accept', onPress: () => acceptInvitation(id) },
      { text: 'Decline', onPress: () => declineInvitation(id) },
      { text: 'Cancel', onPress: () => console.log('cancelled') },
    ],
    { cancelable: false });
  }

  render() {
    const {
      assign, i, eventDetails, status,
    } = this.props;
    const { isVisible } = this.state;
    return (
      <View>

        <List key={i}>
          <ListItem key={i} onPress={() => eventDetails(assign.id)}>
            <Body>
              <Text style={{ fontWeight: '200' }}>{assign.name}</Text>
              <Text note>{moment(assign.starts_at).format('LLLL')}</Text>
              <Text note style={{ fontWeight: '200' }}>
                <Icon type="AntDesign" name="edit" onPress={() => { this.showAlert(status.id); }} style={{ color: '#0052cc', fontSize: 15 }} />
                <Text>{' '}</Text>
                Status:
                {' '}
                {status.status}
              </Text>
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
        { isVisible ? (
          <EventListCard
            closeCard={this.closeCard}
            events={assign}
          />
        ) : null}

      </View>
    );
  }
}
