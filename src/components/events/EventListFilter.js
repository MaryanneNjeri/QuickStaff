import React from 'react';
import {
  Modal, StyleSheet, TouchableHighlight, Switch,
} from 'react-native';
import {
  Form, Icon, Input, Item, Label, Picker, Text, View,
} from 'native-base';
import DatepickerRange from 'react-native-range-datepicker';
import moment from 'moment/moment';
import Button from '../storyComponents/Button';

const styles = StyleSheet.create({
  modalButton: {
    alignItems: 'center',
    marginTop: 30,
    width: 150,
    flexDirection: 'row',


  },

});
export default class EventListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {},
      show: false,

    };
  }

 showCalendar=() => {
   this.setState({ show: true });
 };

  closeCalendar = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const {
      isVisible, closeModal, filterList, resetList,
    } = this.props;
    const { filter, show } = this.state;

    return (
      <View>
        {show ? (
          <DatepickerRange
            buttonColor="white"
            maxMonth={3}
            buttonContainerStyle={{
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              justifyContent: 'center',
              marginLeft: 120,
              height: 50,
              borderRadius: 5,
              backgroundColor: '#0052cc',


            }}
            todayColor="#0052cc"
            selectedBackgroundColor="#0052cc"
            onConfirm={(start, until) => {
              const eve = filter;
              filter.startDate = start;
              filter.untilDate = until;
              this.setState({ filter: eve });
            }}
            onClose={this.closeCalendar}
          />
        ) : (
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
                <View style={{ padding: 20 }}>
                  <Form>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        placeholder="Sort by name or date"
                        placeholderStyle={{ fontSize: 13 }}
                        placeholderIconColor="#007aff"
                        selectedValue={filter.sort_by}
                        onValueChange={(e) => {
                          const eve = filter;
                          filter.sort_by = e;
                          this.setState({ filter: eve });
                        }}
                      >
                        <Picker.Item label="Event name" value="event_name" />
                        <Picker.Item label="date" value="date" />
                      </Picker>

                    </Item>
                    <Item picker>

                      <Picker
                        mode="dropdown"
                        placeholder="Sort by"
                        placeholderIconColor="#007aff"
                        placeholderStyle={{ fontSize: 13 }}
                        selectedValue={filter.sort_dir}
                        onValueChange={(e) => {
                          const eve = filter;
                          filter.sort_dir = e;
                          this.setState({ filter: eve });
                        }}
                      >
                        <Picker.Item label="Ascending" value="ascending" />
                        <Picker.Item label="Descending" value="descending" />
                      </Picker>


                    </Item>
                    <Text>{' '}</Text>
                    <Item floatingLabel>
                      <Icon
                        type="SimpleLineIcons"
                        name="event"
                        style={{ fontSize: 15, color: '#303B43' }}
                      />
                      <Label style={{ color: '#303B43', fontSize: 10 }}>From</Label>
                      <Input
                        style={{ fontSize: 13 }}
                        value={moment(filter.startDate).format('LL')}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Icon
                        type="SimpleLineIcons"
                        name="event"
                        style={{ fontSize: 13, color: '#303B43' }}
                      />
                      <Label style={{ color: '#303B43', fontSize: 10 }}>To</Label>
                      <Input
                        style={{ fontSize: 15 }}
                        value={moment(filter.untilDate).format('LL')}
                      />
                    </Item>

                    <Text>{' '}</Text>

                    <Button width={140} borderRadius={30} color="#0052cc" buttonText="Events Between" onPress={this.showCalendar} />

                    <Text>{' '}</Text>
                    <Text style={{ fontWeight: '200', fontSize: 13 }}>Show Rejected</Text>
                    <Text>{' '}</Text>
                    <Switch
                      onValueChange={(e) => {
                        const eve = filter;
                        filter.switchValue = e;
                        this.setState({ filter: eve });
                      }}
                      value={filter.switchValue}
                    />
                  </Form>
                </View>
                <View style={styles.modalButton}>

                  <Button width={80} borderRadius={30} color="#0052cc" buttonText="Apply" onPress={() => { filterList(filter); }} />
                  <Text>{' '}</Text>
                  <Button
                    width={80}
                    borderRadius={30}
                    color="#0052cc"
                    buttonText="Reset"
                    onPress={() => {
                      this.setState({
                        filter: {},
                      });
                      resetList(filter);
                    }}
                  />
                  <Text>{' '}</Text>
                  <Button width={80} borderRadius={30} color="#0052cc" buttonText="cancel" onPress={closeModal} />

                </View>

              </View>
            </View>
          </Modal>
        )}
      </View>

    );
  }
}
