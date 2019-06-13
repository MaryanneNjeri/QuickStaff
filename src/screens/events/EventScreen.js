import React from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Body,
  Right,
  Text,
  Icon,
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

const _ = require('lodash');

const buttons = [

  { text: 'Logout', icon: 'close', iconColor: 'red' },
  { text: 'Close', icon: 'close', iconColor: 'red' },
];
const cancelIndex = 2;

class EventScreen extends React.Component {
  async componentDidMount() {
    this.props.dispatch(fetchEvents());
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
          <List key={i}>
            <ListItem key={i} onPress={() => this.eventDetails(assign.task.shift.event.id)}>
              <Body>
                <Text style={{ fontWeight: '200' }}>{assign.task.shift.event.name}</Text>
                <Text note>{Date(assign.task.shift.event.starts_at)}</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
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
