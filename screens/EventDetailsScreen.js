import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Container, Content, Text, Tabs, Tab, TabHeading} from 'native-base';
import {store} from '../Redux/store';
import Geocoder from 'react-native-geocoding';
import ClientDetailsTab from '../components/ClientDetailsTab';
import EventDetailsTab from '../components/EventDetailsTab';
import VenueDetailsTab from '../components/VenueDetailsTab';
const _ = require('lodash');


Geocoder.init('AIzaSyBFZ6UNQGy4pNkPo3RMV1zAl3t5H7oEnrU');

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
        this.getEventDetails()
    }
    getEventDetails = () => {

        let events = store.getState().events;
        {
            _.map(events.items, (assign, i) => (

                this.getEvents(assign, i)
            ))
        }
    };
    getEvents = (assign, i) => {
        {
            _.map(assign, (task, i) => (
                this.getDetails(task, i)
            ))
        }


    };
    getDetails = (task, i) => {
        if (!task.length) {
            let ids = this.props.navigation.state.params.id;
            let found = _.find([task['task']['shift']['event']], ['id', ids]);

            if (found) {

                Geocoder.from(found['venue'].address).then(json => {
                    var location = json.results[0].geometry.location
                    this.setState({
                        coords: location
                    })

                })
                    .catch(error => console.log(error))
                this.setState({
                    event: found,
                    client: found['client'],
                    venue: found['venue']

                });
            }
        }
    };
    render() {

        return (
            <Container style={styles.container}>
                <Content>
                    <Tabs>
                        <Tab heading={<TabHeading><Text>Event</Text></TabHeading>}>
                            <EventDetailsTab {...this.state}/>

                        </Tab>
                        <Tab heading={<TabHeading><Text>Client</Text></TabHeading>}>
                            <ClientDetailsTab {...this.state}/>
                        </Tab>
                        <Tab heading={<TabHeading><Text>Venue</Text></TabHeading>}>
                            <VenueDetailsTab {...this.state}/>
                        </Tab>

                    </Tabs>


                </Content>
            </Container>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
});