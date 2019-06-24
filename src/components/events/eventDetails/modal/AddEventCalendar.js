import * as React from 'react';
import {
  Container, Content, Form, Body, Input, Label, Text, Icon, Item, Button,
} from 'native-base';
import {
  StyleSheet, Modal, View, TouchableHighlight, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  modalButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 100,


  },
});
export default class AddEventCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      eventDetails: {},

    };
  }


  componentDidMount() {
    const { event, client, venue } = this.props;
    this.setState({
      eventDetails: {
        id: event.id,
        event_name: event.name,
        client_name: client.name,
        starts_at: event.starts_at,
        address: venue.address,

      },
    });
  }

    confirmEvent = async () => {
      const { eventDetails } = this.state;
      const markedDates = [];
      markedDates.push(eventDetails);
      try {
        await AsyncStorage.setItem('event', JSON.stringify(markedDates));
        alert('Event has been saved');
      } catch (error) {
        console.log(error);
      }
    };

    render() {
      const { isModalVisible, closeModal } = this.props;
      const { eventDetails } = this.state;
      return (
        <Container>

          <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={false}
          >
            <Content>
              <View style={{ marginTop: 22 }}>
                <TouchableHighlight
                  style={{ alignSelf: 'flex-end' }}

                  onPress={() => {
                    closeModal(isModalVisible);
                  }}
                >
                  <Text style={{ fontWeight: '200', color: '#303B43', fontSize: 13 }}>
                    {' '}
Close
                    <Icon
                      name="close"
                      type="EvilIcons"
                      style={{ fontSize: 20, color: '#303B43' }}
                    />
                  </Text>
                </TouchableHighlight>
                <Body>

                  <Icon
                    type="AntDesign"
                    name="exclamationcircle"
                    style={{ fontSize: 100, color: '#0052cc', textAlign: 'center' }}
                  />
                  <Text style={{ fontSize: 20, fontWeight: '200', color: '#303B43' }}>Confirm Event</Text>
                </Body>
                <View style={{ padding: 18 }}>
                  <Form>
                    <Item floatingLabel>
                      <Icon
                        type="SimpleLineIcons"
                        name="event"
                        style={{ fontSize: 15, color: '#303B43' }}
                      />
                      <Label style={{ color: '#303B43', fontSize: 10 }}>Event Name</Label>
                      <Input
                        style={{ fontSize: 15 }}
                        value={eventDetails.event_name}

                        onChangeText={(e) => {
                          const eve = eventDetails;
                          eve.event_name = e;
                          this.setState({ eventDetails: eve });
                        }}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Icon
                        type="Ionicons"
                        name="md-people"
                        style={{ fontSize: 15, color: '#303B43' }}
                      />
                      <Label style={{ color: '#303B43', fontSize: 10 }}>Client</Label>
                      <Input
                        style={{ fontSize: 15 }}
                        value={eventDetails.client_name}
                        onChangeText={(e) => {
                          const eve = eventDetails;
                          eve.client_name = e;
                          this.setState({ eventDetails: eve });
                        }}
                      />
                    </Item>


                    <Item floatingLabel>
                      <Icon
                        name="clock"
                        type="EvilIcons"
                        style={{ fontSize: 15, color: '#303B43' }}
                      />
                      <Label style={{ color: '#303B43', fontSize: 10 }}>Starts at </Label>
                      <Input
                        style={{ fontSize: 15 }}
                        value={eventDetails.starts_at}
                        onChangeText={(e) => {
                          const eve = eventDetails;
                          eve.starts_at = e;
                          this.setState({ eventDetails: eve });
                        }}
                      />
                    </Item>

                    <Item floatingLabel>
                      <Icon
                        type="Entypo"
                        name="location-pin"
                        style={{ fontSize: 15, color: '#303B43' }}
                      />
                      <Label style={{ color: '#303B43', fontSize: 10 }}>Venue</Label>
                      <Input
                        style={{ fontSize: 15 }}
                        value={eventDetails.address}
                        onChangeText={(e) => {
                          const eve = eventDetails;
                          eve.address = e;
                          this.setState({ eventDetails: eve });
                        }}
                      />
                    </Item>


                  </Form>

                  <View style={styles.modalButton}>
                    <Button rounded style={styles.button} onPress={this.confirmEvent}>
                      <Text style={{
                        textAlign: 'center',
                        fontWeight: '200',
                        color: 'white',
                        fontSize: 13,
                      }}
                      >
Add Event
                      </Text>

                    </Button>
                  </View>

                </View>


              </View>

            </Content>

          </Modal>
        </Container>
      );
    }
}
AddEventCalendar.propTypes = {
  closeModal: PropTypes.func.isRequired,

};
