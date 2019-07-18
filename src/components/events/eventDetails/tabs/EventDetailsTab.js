import * as React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import {
  Body, Container, Content, Icon, Left, ListItem, Text,
} from 'native-base';
import moment from 'moment/moment';
import AddEventCalendar from '../modal/AddEventCalendar';
import Card from '../../../common/controls/Card/Card';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  font:
        {
          fontWeight: 'bold',
          fontSize: 30,
        },
  text: {
    color: '#00adf5',
    fontSize: 13,

  },
});
export default class EventDetailsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

    setModalVisible = (visible) => {
      this.setState({
        isModalVisible: visible,
      });
    };

    // we use a call back function to pass he props from child to the parent function
    closeModal = () => {
      this.setState({
        isModalVisible: false,
      });
    };

    render() {
      const { event } = this.props;
      const { isModalVisible } = this.state;
      return (
        <Container style={styles.container}>
          <Content>
            {isModalVisible ? (
              <AddEventCalendar
                {...this.props}
                closeModal={this.closeModal}
              />
            ) : null}
            <View style={{ paddingRight: 10, paddingLeft: 10 }}>
              <Text />
              <Text style={styles.font}>
                {event.name}
              </Text>

              <Text>{' '}</Text>
              <ListItem icon noBorder>
                <Left>
                  <Icon type="EvilIcons" name="calendar" />
                </Left>
                <Body>
                  <Text style={{ fontWeight: '200', fontSize: 12 }}>Event date</Text>

                  <Text style={{
                    fontSize: 14,
                    fontWeight: '200',
                  }}
                  >
                    {moment(event.starts_at).format(' LLLL')}
                  </Text>
                  <TouchableHighlight onPress={() => {
                    this.setModalVisible(true);
                  }}
                  >
                    <Text style={styles.text}>Add to calendar</Text>
                  </TouchableHighlight>
                </Body>
              </ListItem>
              <Text>{' '}</Text>


              <ListItem icon noBorder>
                <Left>
                  <Icon type="EvilIcons" name="comment" />
                </Left>
                <Body>
                  <Text style={{ fontSize: 12 }} note>Positions Available</Text>
                  <Text style={{
                    fontSize: 14,
                    fontWeight: '200',
                  }}
                  >
                    {event.positions_available}
                  </Text>
                </Body>
              </ListItem>
              <Text>{' '}</Text>
              <ListItem icon noBorder>
                <Left>
                  <Icon
                    type="MaterialIcons"
                    name="event-note"
                    style={{ color: '#303B43' }}
                  />


                </Left>
                <Body>
                  <Text style={{ fontSize: 12 }} note>Event Notes</Text>
                  <Text style={{
                    fontSize: 14,
                    fontWeight: '200',
                  }}
                  >
                    {event.event_notes}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#00adf5' }}>Read More...</Text>

                </Body>
              </ListItem>
              <Text>{' '}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Card midWidth>
                  Starts at
                  {' '}
                  {'\n'}
                  {moment(event.starts_at).format('LL')}
                  {' '}
                  {'\n'}
                  {moment(event.starts_at).format('LTS')}
                </Card>
                <Text>{' '}</Text>
                <Card midWidth>
                    Ends at
                  {' '}
                  {'\n'}
                  {moment(event.ends_at).format('LL')}
                  {' '}
                  {'\n'}
                  {moment(event.ends_at).format('LTS')}
                </Card>
              </View>

              <Text>{' '}</Text>

              <ListItem icon noBorder>
                <Left>
                  <Icon type="MaterialIcons" name="event-note" style={{ color: '#303B43' }} />


                </Left>
                <Body>
                  <Text style={{ fontSize: 12 }} note>Manager Notes</Text>
                  <Text style={{
                    fontSize: 13,
                    fontWeight: '200',
                  }}
                  >
                    {event.manager_notes}
                  </Text>
                  <Text style={{ fontSize: 13, color: '#00adf5' }}>Read More...</Text>

                </Body>
              </ListItem>
            </View>
          </Content>
        </Container>
      );
    }
}
