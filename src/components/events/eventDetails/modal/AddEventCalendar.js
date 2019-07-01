import * as React from 'react';
import {
  Container, Content, Form, Body, Text, Icon,
} from 'native-base';
import {
  StyleSheet, Modal, View, TouchableHighlight, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import FormInput from '../../../common/controls/Form/FormInput';
import Button from '../../../common/buttons/Button';

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
                    <FormInput
                      label="Event Name"
                      floatingLabel
                      value={eventDetails.event_name}
                      onChangeText={(e) => {
                        const eve = eventDetails;
                        eve.event_name = e;
                        this.setState({ eventDetails: eve });
                      }}
                      leftIcon="calendar-plus-o"
                      color="#303B43"
                      size={13}
                    />
                    <FormInput
                      label="Client"
                      floatingLabel
                      value={eventDetails.client_name}
                      onChangeText={(e) => {
                        const eve = eventDetails;
                        eve.client_name = e;
                        this.setState({ eventDetails: eve });
                      }}
                      leftIcon="user"
                      color="#303B43"
                      size={13}
                    />
                    <FormInput
                      label="Starts at"
                      floatingLabel
                      value={eventDetails.starts_at}
                      onChangeText={(e) => {
                        const eve = eventDetails;
                        eve.starts_at = e;
                        this.setState({ eventDetails: eve });
                      }}
                      leftIcon="clock-o"
                      color="#303B43"
                      size={13}
                    />
                    <FormInput
                      label="Venue"
                      floatingLabel
                      value={eventDetails.address}
                      onChangeText={(e) => {
                        const eve = eventDetails;
                        eve.address = e;
                        this.setState({ eventDetails: eve });
                      }}
                      leftIcon="map-marker"
                      color="#303B43"
                      size={13}
                    />
                  </Form>
                  <View style={styles.modalButton}>
                    <Button primary textColor="white" onPress={this.confirmEvent}>Add Event</Button>
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
