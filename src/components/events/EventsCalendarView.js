import { Agenda } from 'react-native-calendars';
import React from 'react';
import { Container, Content } from 'native-base';
import { Dimensions } from 'react-native';
import Empty from './Empty';

const { width, height } = Dimensions.get('window');
// eslint-disable-next-line react/prefer-stateless-function
export default class EventsCalendarView extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content>
          <Agenda
            rowHasChanged={(r1, r2) => r1.text !== r2.text}
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
            renderEmptyDate={() => (<Empty />)}
            renderEmptyData={() => (<Empty />)}
            monthFormat="MMMM,yyyy"
            calendarWidth={width}
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            markingType="custom"

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
