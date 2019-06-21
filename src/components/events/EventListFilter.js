import React from 'react';
import { Modal, StyleSheet, TouchableHighlight } from 'react-native';
import {
  Button, Content, Form, Icon, Input, Item, Label, Picker, Text, View,
} from 'native-base';

const styles = StyleSheet.create({
  modalButton: {

    alignItems: 'center',
    marginTop: 30,
    width: 100,
    flexDirection: 'row',


  },
  button: {
    marginRight: 15,
    marginLeft: 15,
    width: 80,
  },
});
export default class EventListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      selected2: undefined,
    };
  }

    onValueChange2=(value) => {
      this.setState({
        selected2: value,
      });
    }

    render() {
      const { isVisible, closeModal } = this.props;
      return (
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={isVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <TouchableHighlight
                  style={{ alignSelf: 'flex-end' }}

                  onPress={closeModal}
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
                <Icon
                  type="AntDesign"
                  name="calendar"
                  style={{
                    fontSize: 80, color: '#0052cc', textAlign: 'center', fontWeight: '200',
                  }}
                />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: '200', color: '#303B43' }}>Sort Events </Text>
                </View>
                <View style={{ padding: 15 }}>
                  <Form>
                    <Item picker>
                      <Icon
                        type="SimpleLineIcons"
                        name="event"
                        style={{ fontSize: 15, color: '#303B43' }}
                      />
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        placeholder="Sort by name or date"

                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange2}
                      >
                        <Picker.Item label="Event name" value="event_name" />
                        <Picker.Item label="date" value="date" />
                      </Picker>
                    </Item>
                    <Item picker>
                      <Icon
                        type="SimpleLineIcons"
                        name="event"
                        style={{ fontSize: 15, color: '#303B43' }}
                      />
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        placeholder="Sort by name or date"

                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange2}
                      >
                        <Picker.Item label="Event name" value="event_name" />
                        <Picker.Item label="date" value="date" />
                      </Picker>
                    </Item>


                    <Item floatingLabel>
                      <Icon
                        name="clock"
                        type="EvilIcons"
                        style={{ fontSize: 15, color: '#303B43' }}
                      />
                      <Label style={{ color: '#303B43', fontSize: 10 }}>EventsBetween</Label>
                      <Input
                        style={{ fontSize: 15 }}
                      />
                    </Item>

                    <Text>Show Rejected</Text>
                    {/* <Switch */}
                    {/*  onValueChange={this.toggleSwitch()} */}
                    {/*  value={switchValue} */}
                    {/* /> */}
                  </Form>
                </View>
                <View style={styles.modalButton}>
                  <Button rounded style={styles.button} onPress={this.filterList}>
                    <Text style={{
                      textAlign: 'center',
                      fontWeight: '200',
                      color: 'white',
                      fontSize: 13,
                    }}
                    >
                                  Apply
                    </Text>

                  </Button>
                  <Button rounded style={styles.button} onPress={closeModal}>
                    <Text style={{
                      textAlign: 'center',
                      fontWeight: '200',
                      color: 'white',
                      fontSize: 13,
                    }}
                    >
                                  Cancel
                    </Text>

                  </Button>
                </View>

              </View>
            </View>
          </Modal>
        </View>

      );
    }
}
