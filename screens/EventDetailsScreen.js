const event_details =
    {
        id: 6,
        event: 'Domingo Streich',
        event_owner: 'Domingo Streich',
        venue: ' Bobbie Volkman',
        address: '163 Cullen Isle Suite 244 South Montanatown, ',
        client: 'Kozey, Kulas and Botsford',
        Time: ' May 10th 2019',
        first_date: '10th 2019 at 8:27 am',
        second_date: '13th 2019 at 11:27 am',
        events_notes: 'Sit ad adipisci ab et nihil. Et architecto itaque consequatur eos odio dolorum odit. ',
        Team_manager_notes: 'Sit sint et doloribus magni sed neque voluptatem excepturi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque',
        staff: 'Lauren Jaskolski',
        icon: "https://img.icons8.com/ultraviolet/40/000000/overtime.png"
    }

import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Container, Content, Text, Card, CardItem, ListItem, Left, Icon, Body, Segment, Button} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {store} from '../Redux/store';

const _ = require('lodash');
const {width} = Dimensions.get('window');
export default class EventDetailsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            event: {},
            details: {},


        }
    }

    componentDidMount() {

        this.getEventDetails()
    }

    getEventDetails = () => {
        let ids = this.props.navigation.state.params.id;
        let events = store.getState().events.items.find(x => x.id === ids);

        {
            _.map(events, (shift, i) => (
                this.setState({
                        event: shift,
                        details: events,

                    }
                )

            ))
        }

    };

    getList=(item, i)=> {
        if (item.id) {
            return <View key={i}>

                <Card>
                    <CardItem>
                        <Left>
                            <Icon type="FontAwesome" name="sticky-note"/>
                            <Text>Event notes</Text>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={{fontSize: 15}}>{item.event_notes}</Text>
                            <Text style={{fontSize: 10, color: '#00adf5'}}>Read More...</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Text>{" "}</Text>
                <Grid>
                    <Row>
                        <Card style={styles.call}>
                            <Body>
                                <Text note>Starts at</Text>
                                <Text>{""}</Text>
                                <Text style={{fontWeight: '200', fontSize: 15}}>
                                    {item.ends_at}
                                </Text>

                            </Body>

                        </Card>
                        <Card style={styles.call}>
                            <Body>
                                <Text note>Ends at</Text>

                                <Text>{""}</Text>
                                <Text style={{fontWeight: '200', fontSize: 15}}>
                                    {item.starts_at}
                                </Text>

                            </Body>

                        </Card>

                    </Row>
                </Grid>
                {_.map(item, (venue, i) => (
                    this.getVenue(venue, i)
                ))}
            </View>

        }


    }

    getVenue=(venue, i)=> {

        if(venue.email){
            return <View key={i}>
                <Text>{" "}</Text>
                <Text>Client Info</Text>
                <ListItem icon noBorder>
                    <Left>
                        <Icon type="Ionicons" name="ios-people"/>
                    </Left>
                    <Body>
                        <Text style={{fontWeight:'200'}}>{venue.name}</Text>
                        <Text note>{venue.email}</Text>
                        <Text note>{venue.phone}</Text>

                    </Body>
                    
                </ListItem>
                <Text>{" "}</Text>
            </View>
        }
        if (venue.lat) {
            return <View key={i}>

                <Text>{" "}</Text>
                <Text>Location</Text>
                <Card>

                    <CardItem cardBody>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{height: width / 2, width: width}}
                            region={{
                                latitude: venue.lat,
                                longitude: venue.lng,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421

                            }}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: venue.lat,
                                    longitude: venue.lng
                                }}
                                title={venue.city}
                                description={"Event Venue"}
                            />
                        </MapView>
                    </CardItem>
                </Card>
                <Text>{" "}</Text>
                <Card>
                    <CardItem>
                        <Left>
                            <Icon type="FontAwesome" name="sticky-note"/>
                            <Text>Venue Notes</Text>
                        </Left>
                    </CardItem>
                    <CardItem><Text>{" "}</Text>
                        <Body>
                            <Text style={{fontSize: 15}}>{venue.venue_notes}</Text>
                            <Text style={{fontSize: 10, color: '#00adf5'}}>Read More...</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Text>{""}</Text>
                <Body>
                    <Text style={{fontWeight:'200'}}>{venue.name} {venue.state}</Text>
                    <Text note>{venue.address}</Text>
                </Body>
                <Body>
                    <Icon type="Ionicons" name="car"/>
                </Body>
                <Segment>
                    <Button first active>
                        <Text>Accept Invite</Text>
                    </Button>
                    <Button last>
                        <Text>Decline Invite</Text>
                    </Button>
                </Segment>
            </View>
        }


    };


    render() {
        // {
        //     console.log(this.state.event.shift.id)
        // }
        return (
            <Container style={styles.container}>
                <Content>

                    <Text style={styles.font}>
                        Stand up comedy
                    </Text>
                    <Text style={styles.text}>by {event_details.event}</Text>
                    <Text>{" "}</Text>
                    <ListItem icon noBorder>
                        <Left>
                            <Icon type="EvilIcons" name="calendar"/>
                        </Left>
                        <Body>
                            <Text>{this.state.details.invited_at}</Text>
                            <Text note>{event_details.first_date} - {event_details.second_date} GMT+</Text>
                            <Text style={styles.text}>Add to calendar</Text>
                        </Body>
                    </ListItem>
                    <Text>{" "}</Text>
                    <ListItem icon noBorder>
                        <Left>
                            <Icon type="EvilIcons" name="location"/>
                        </Left>
                        <Body>
                            <Text>Venue</Text>
                            <Text note>{event_details.venue}</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon noBorder>
                        <Left>
                            <Icon type="EvilIcons" name="comment"/>
                        </Left>
                        <Body>
                            <Text>Status</Text>
                            <Text note>{this.state.details.status}</Text>
                        </Body>
                    </ListItem>
                    <Text>{""}</Text>
                    {_.map(this.state.event.shift, (item, i) => (
                        this.getList(item, i)
                    ))}


                    
                </Content>
            </Container>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'space-between'
    },
    font:
        {
            fontWeight: 'bold',
            fontSize: 30,
        },
    card: {
        width: 200,
        height: 100,
    },
    text: {
        color: '#00adf5',
        fontSize: 15,

    },
    logo: {
        width: 20,
        height: 10,
        marginRight: 0
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',

    },
    Thumb: {
        height: 10,
        width: 20
    },
    call: {
        padding: 10,
        borderRadius: 5,
    }
});