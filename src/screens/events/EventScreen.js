import React from 'react';
import {
  Container,
  Content,
  ActionSheet,
  Toast,
  Segment,
  Button,
  Text,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEvents } from '../../redux/events/action';
import HeaderComponent from '../../components/events/HeaderComponent';
import { logout } from '../../components/lib/functions/auth/logout';
import Error from '../../components/events/Error';
import Loader from '../../components/general/Loader';
import registerForPushNotificationAsync from '../../api/auth.api';
import EventListView from '../../components/events/EventListView';
import EventCalendarView from '../../components/events/EventsCalendarView';

const _ = require('lodash');

const buttons = [

  { text: 'Logout', icon: 'close', iconColor: 'red' },
  { text: 'Close', icon: 'close', iconColor: 'red' },
];
const cancelIndex = 2;

class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
    };
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEvents());
    registerForPushNotificationAsync();
  }


  eventDetails = (id) => {
    this.props.navigation.navigate('EventDetails', { id });
  };

   calendarView = () => {
     this.setState({ mode: false });
   };

   listView = () => {
     this.setState({ mode: true });
   };

    getTask = (assignment, i) => (
      <Content key={i}>
        {
                    _.map(assignment, (assign, i) => (
                      this.getContent(i, assign)
                    ))
                }
      </Content>
    );

    getContent = (i, assign) => {
      if (!assign.length) {
        return (

          <EventListView key={i} i={i} assign={assign} eventDetails={this.eventDetails} />


        );
      }
    };

    openActionSheet = () => {
      ActionSheet.show(
        {
          options: buttons,
          cancelButtonIndex: cancelIndex,
          title: 'User settings',
        },
        (buttonIndex) => {
          if (buttonIndex == 0) {
            logout();
            Toast.show({
              text: 'Successfully Logged out',
              position: 'top',
              duration: 3000,
            });
            this.props.navigation.navigate('Auth');
          }
        },
      );
    };

    render() {
      const { error, loading, events } = this.props;
      const { mode } = this.state;


      if (error) {
        return (
          <Error {...this.props} />
        );
      }
      if (loading) {
        return (
          <Loader />
        );
      }

      return (
        <Container>
          <Content>
            <HeaderComponent openActionSheet={this.openActionSheet} />
            <Segment>

              <Button first onPress={this.listView}><Text>List View</Text></Button>
              <Button last onPress={this.calendarView}><Text>Calendar View</Text></Button>
            </Segment>


            { mode ? _.map(events, (assignment, i) => (
              this.getTask(assignment, i)

            ))
              : <EventCalendarView />}

          </Content>
        </Container>

      );
    }
}
EventScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
  events: state.events.items,
  loading: state.events.loading,
  error: state.events.Error,
});
export default connect(mapStateToProps)(EventScreen);
