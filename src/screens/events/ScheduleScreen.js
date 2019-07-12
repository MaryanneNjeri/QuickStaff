import React from 'react';
import {
  StyleSheet, Dimensions, View, TouchableOpacity, AsyncStorage,
} from 'react-native';
import {
  Card, CardItem, Container, Content, Text, Body, Left, Right, Icon, ListItem
} from 'native-base';
import { Agenda } from 'react-native-calendars';
import Header from '../../components/common/controls/Header/Header'
const { width, height } = Dimensions.get('window');
const _ = require('lodash');

const Details = ({}) => (
  <Container>
    <Content>
      <Body>
        <Text note style={{ fontSize: 10 }}>Events Available</Text>
      </Body>
      <TouchableOpacity onPress={this.event_details}>
        <Card style={styles.containerStyle}>
          <CardItem onPress={this.event_details}>
            <Left>
              <Body>
                <Text style={{ fontSize: 18 }}>{this.state.event.event_name}</Text>
                <Text note style={{ fontSize: 10 }}>
                  {' '}
by
                  {this.state.event.client_name}
                </Text>
                <Text>{' '}</Text>
                <ListItem icon noBorder>
                  <Left>
                    <Icon type="EvilIcons" name="calendar" />
                  </Left>
                  <Body>

                    <Text note style={{ fontSize: 8 }}>{this.state.event.starts_at}</Text>
                  </Body>
                </ListItem>
              </Body>
            </Left>

            <Right>
              <Icon type="EvilIcons" name="location" />
              <Text note style={{ fontSize: 10 }}>{this.state.event.address}</Text>

            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </Content>
  </Container>

);

const Empty = () => (
  <Container>
    <Content>
      <Body>

        <Text>No Events Available</Text>
      </Body>
    </Content>
  </Container>
);


class ScheduleScreen extends React.Component {
    retrieveEvent = async () => {
      const event = JSON.parse((await AsyncStorage.getItem('event')));

      const markedDate = [];
      {
        _.map(event, (date, i) => (

          markedDate.push(date.starts_at)

        ));
      }
      const obj = markedDate.reduce((c, v) => Object.assign(c, {
        [v]: {
          customStyles: {
            container: {
              backgroundColor: '#00adf5',
            },

            text: {
              color: 'white',

            },

          },
        },
      }), {});
      this.setState({
        marked: obj,
      });
    };

    getSchedule = () => {
      const { events } = this.props;
      const invited_at = [];

      {
        _.map(events, (detail, i) => (

          invited_at.push(detail.invited_at)

        ));
      }
      const item = invited_at.reduce((c, v) => Object.assign(c, {
        [v]: [{
          text: 'date_object',
        }],
      }), {});
      this.setState({ item });
    };

    render() {
      return (
        <Container style={{ flex: 1 }}>
          <Content>
            <Header standard >Calendar</Header>
            <Agenda
              current={Date()}
              minDate="2019-01-01"
              maxDate="2020-01-01"
              pastScrollRange={50}
              futureScrollRange={50}
              onRefresh={() => console.log('refreshing...')}
              onDayPress={(day) => {
                console.log('selected day', day);
              }}
              onDayLongPress={(day) => {
                console.log('selected day', day);
              }}
              monthFormat="MMMM,yyyy"
              calendarWidth={width}
              onPressArrowLeft={substractMonth => substractMonth()}
              onPressArrowRight={addMonth => addMonth()}
              markingType="custom"
              renderItem={() => (<Details />)}
              renderDay={() => (<View />)}

              renderEmptyDate={() => (<Empty />)}
              renderEmptyData={() => (<Empty />)}
              rowHasChanged={(r1, r2) => r1.text !== r2.text}
              theme={{
                backgroundColor: 'white',
                calendarBackground: 'white',
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: '#f0f0f0',
                todayTextColor: 'tomato',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                monthTextColor: '#2d4150',
                agendaKnobColor: '#00adf5',
                agendaDayNumColor: 'green',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
              }}
              style={{
                height,
              }}
            />
          </Content>
        </Container>


      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  containerStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,

    height: width / 3.5,
    borderRightWidth: 5,
    borderRightColor: 'tomato',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  text: {
    alignItems: 'center',

  },
});

export default ScheduleScreen;
