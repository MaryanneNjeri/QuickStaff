import React from 'react';
import {
  Container,
  Content,
  Text,
  Tab,
  Tabs,
  TabHeading,
  ActionSheet,
  Toast,
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

const _ = require('lodash');

const buttons = [

  { text: 'Logout', icon: 'close', iconColor: 'red' },
  { text: 'Close', icon: 'close', iconColor: 'red' },
];
const cancelIndex = 2;

class EventScreen extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEvents());
    registerForPushNotificationAsync();
  }


  eventDetails = (id) => {
    this.props.navigation.navigate('EventDetails', { id });
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
            <Tabs>
              <Tab heading={<TabHeading><Text>All</Text></TabHeading>} />
              <Tab heading={<TabHeading><Text>Today</Text></TabHeading>} />
              <Tab heading={<TabHeading><Text>Tomorrow</Text></TabHeading>} />
              <Tab heading={<TabHeading><Text>This Week</Text></TabHeading>} />
            </Tabs>

            {
                        _.map(events, (assignment, i) => (
                          this.getTask(assignment, i)

                        ))
                    }
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
