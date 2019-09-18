import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content, Text, Tabs, Tab, TabHeading,
} from 'native-base';
import Geocoder from 'react-native-geocoding';
import _ from 'lodash';
import { store } from '../../redux/store';
import ClientDetailsTab from '../../components/events/eventDetails/tabs/ClientDetailsTab';
import EventDetailsTab from '../../components/events/eventDetails/tabs/EventDetailsTab';
import VenueDetailsTab from '../../components/events/eventDetails/tabs/VenueDetailsTab';
import getEnvVars from '../../../environment';

const { API_KEY } = getEnvVars();
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});
export default class EventDetailsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      event: {},
      client: {},
      venue: {},
      coords: {},
      detail: {},
    };
  }

  componentDidMount() {
    this.getEventDetails();
  }

  getEventDetails = () => {
    const events = store.getState().events;


    _.map(events.items.data, (assign, i) => (

      this.getEvents(assign, i)
    ));
  };

    getEvents = (assign) => {
      const ids = this.props.navigation.state.params.id;

      const found = _.find([assign.task.data.shift.data.event.data], ['id', ids]);

      if (found) {
        Geocoder.init(API_KEY);

        Geocoder.from(found.venue.data.address).then((json) => {
          const location = json.results[0].geometry.location;
          this.setState({
            coords: location,
          });
        })
          .catch(error => console.log(error));
        this.setState({
          event: found,
          client: found.client.data,
          venue: found.venue.data,

        });
      }
    };


    render() {
      return (

        <Container style={styles.container}>
          <Content>
            <Tabs>
              <Tab heading={<TabHeading><Text>Event</Text></TabHeading>}>
                <EventDetailsTab {...this.state} />
              </Tab>
              <Tab heading={<TabHeading><Text>Client</Text></TabHeading>}>
                <ClientDetailsTab {...this.state} />
              </Tab>
              <Tab heading={<TabHeading><Text>Venue</Text></TabHeading>}>
                <VenueDetailsTab {...this.state} />
              </Tab>
            </Tabs>
          </Content>
        </Container>


      );
    }
}
