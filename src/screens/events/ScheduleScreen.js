import React from 'react';
import { Container, Content, Text } from 'native-base';
import { Agenda } from 'react-native-calendars';
import { Dimensions } from 'react-native';
import Header from '../../components/common/controls/Header/Header';

const { width, height } = Dimensions.get('window');
// eslint-disable-next-line react/prefer-stateless-function
export default class ScheduleScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Header>Calendar</Header>

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
            // renderItem={() => (<Details />)}
            // renderDay={() => (<View />)}
            //
            // renderEmptyDate={() => (<Empty />)}
            // renderEmptyData={() => (<Empty />)}
            rowHasChanged={(r1, r2) => r1.text !== r2.text}

            theme={{
              textSectionTitleColor: 'black',
              selectedDayBackgroundColor: '#f0f0f0',
              todayTextColor: 'tomato',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              dayTextColor: 'black',
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
