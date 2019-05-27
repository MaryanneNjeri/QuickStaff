import React from 'react';
import {StyleSheet, Dimensions, View, Linking, TouchableHighlight, Modal} from 'react-native';
import {
    Container,
    Content,
    Text,
    Card,
    CardItem,
    ListItem,
    Left,
    Icon,
    Body,
    Tabs,
    Tab, TabHeading, Form, Item, Label, Input, Button
} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {store} from '../Redux/store';
import Geocoder from 'react-native-geocoding';
import moment from 'moment';
import AddEventModal from '../components/AddEventModal';
const _ = require('lodash');
const {width} = Dimensions.get('window');

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
            isModalVisible: false
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
                console.log(moment(found.starts_at).format('LL'));
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

    setModalVisible = (visible) => {
        this.setState({
            isModalVisible: visible
        })
    };
    // we use a call back function to pass he props from child to the parent function
    closeModal =()=>{
        this.setState({
            isModalVisible: false
        })

    }
    render() {

        return (
            <Container style={styles.container}>
                <Content>
                    {/*    we only render this component if  the isModalVisible has been set to true */}
                    {this.state.isModalVisible ? <AddEventModal data={this.state.event} {...this.state} closeModal={this.closeModal}/>:null}


                    <Tabs>
                        <Tab heading={<TabHeading><Text>Event</Text></TabHeading>}>
                            <View style={{paddingRight: 10, paddingLeft: 10}}>
                                <Text>{""}</Text>
                                <Text style={styles.font}>
                                    {this.state.event.name}
                                </Text>

                                <Text>{" "}</Text>
                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="EvilIcons" name="calendar"/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontWeight: '200', fontSize: 12}}>Event date</Text>

                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '200'
                                        }}>{Date(this.state.event.starts_at)}</Text>
                                        <TouchableHighlight onPress={() => {
                                            this.setModalVisible(true)
                                        }}>
                                            <Text style={styles.text}>Add to calendar</Text>
                                        </TouchableHighlight>
                                    </Body>
                                </ListItem>
                                <Text>{" "}</Text>


                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="EvilIcons" name="comment"/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontSize: 12}} note>Staff Invited</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '200'
                                        }}>{this.state.event.staff_invited}</Text>
                                    </Body>
                                </ListItem>
                                <Text>{" "}</Text>
                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="MaterialIcons" name="event-note"
                                              style={{color: '#303B43'}}/>


                                    </Left>
                                    <Body>
                                        <Text style={{fontSize: 12}} note>Event Notes</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '200'
                                        }}>{this.state.event.event_notes}</Text>
                                        <Text style={{fontSize: 12, color: '#00adf5'}}>Read More...</Text>

                                    </Body>
                                </ListItem>
                                <Text>{" "}</Text>
                                <Grid>
                                    <Row style={{paddingRight: 7}}>
                                        <Card style={styles.call}>
                                            <Body>
                                                <Text note>Starts at</Text>
                                                <Text>{""}</Text>
                                                <Text style={{fontWeight: '200', fontSize: 15}}>
                                                    {moment(this.state.event.starts_at).format('LL')}
                                                </Text>
                                                <Text note>{moment(this.state.event.starts_at).format('LTS')}</Text>

                                            </Body>

                                        </Card>
                                        <Card style={styles.call}>
                                            <Body>
                                                <Text note>Ends at</Text>

                                                <Text>{""}</Text>

                                                <Text style={{fontWeight: '200', fontSize: 15}}>
                                                    {moment(this.state.event.ends_at).format('LL')}
                                                </Text>
                                                <Text note>{moment(this.state.event.ends_at).format('LTS')}</Text>
                                            </Body>

                                        </Card>

                                    </Row>
                                </Grid>
                                <Text>{" "}</Text>

                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="MaterialIcons" name="event-note" style={{color: '#303B43'}}/>


                                    </Left>
                                    <Body>
                                        <Text style={{fontSize: 12}} note>Manager Notes</Text>
                                        <Text style={{
                                            fontSize: 13,
                                            fontWeight: '200'
                                        }}>{this.state.event.manager_notes}</Text>
                                        <Text style={{fontSize: 13, color: '#00adf5'}}>Read More...</Text>

                                    </Body>
                                </ListItem>
                            </View>

                        </Tab>
                        <Tab heading={<TabHeading><Text>Client</Text></TabHeading>}>
                            <View style={{paddingRight: 10, paddingLeft: 10}}>
                                <Text>{""}</Text>

                                <Text style={styles.font}>
                                    {this.state.client.name}
                                </Text>
                                <Text>{" "}</Text>

                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="Ionicons" name="ios-people"/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontWeight: '200', fontSize: 13}}>{this.state.client.name}</Text>
                                        <Text
                                            style={{fontSize: 13, fontWeight: '200'}}> {this.state.client.email}</Text>
                                        <Text style={{fontSize: 13, fontWeight: '200'}}>{this.state.client.phone}</Text>

                                    </Body>

                                </ListItem>
                                <Text>{" "}</Text>

                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="MaterialIcons" name="event-note"
                                              style={{color: '#303B43'}}/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontWeight: '200', fontSize: 12}} note>Client Notes</Text>
                                        <Text style={{fontSize: 13, fontWeight: '200'}}>{this.state.client.notes}</Text>
                                        <Text style={{fontSize: 12, color: '#00adf5'}}>Read More...</Text>

                                    </Body>
                                </ListItem>
                                <Text>{" "}</Text>
                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="MaterialCommunityIcons" name="web"
                                              style={{color: '#303B43'}}/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontWeight: '200', fontSize: 12}} note>Web site</Text>
                                        <Text style={{fontSize: 12, fontWeight: '200'}}>Check out the client
                                            website</Text>
                                        <Text style={{fontSize: 12, color: '#00adf5'}}
                                              onPress={() => Linking.openURL(this.state.client.website)}>view
                                            ....</Text>

                                    </Body>
                                </ListItem>
                            </View>
                        </Tab>
                        <Tab heading={<TabHeading><Text>Venue</Text></TabHeading>}>
                            <View style={{paddingRight: 10, paddingLeft: 10}}>
                                <Text style={styles.font}>
                                    {this.state.venue.name}
                                </Text>

                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="Entypo" name="location-pin"
                                              style={{color: '#303B43'}}/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontWeight: '200', fontSize: 12}} note>Address</Text>
                                        <Text
                                            style={{fontSize: 12, fontWeight: '200'}}>{this.state.venue.address}</Text>

                                    </Body>
                                </ListItem>
                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="Entypo" name="phone" style={{fontSize: 15, color: '#303B43'}}/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontWeight: '200', fontSize: 12}} note>Phone</Text>
                                        <Text style={{fontSize: 12, fontWeight: '200'}}>{this.state.venue.phone}</Text>

                                    </Body>
                                </ListItem>

                                <Text>{""}</Text>
                                <Text style={{fontSize: 15, fontWeight: '200'}}>Location</Text>

                                {!_.isEmpty(this.state.coords)
                                    ? <Card>
                                        <CardItem cardBody>
                                            <MapView
                                                provider={PROVIDER_GOOGLE}
                                                style={{height: width / 2, width: width}}
                                                region={{
                                                    latitude: this.state.coords.lat,
                                                    longitude: this.state.coords.lng,
                                                    latitudeDelta: 0.0922,
                                                    longitudeDelta: 0.0421

                                                }}
                                            >
                                                <MapView.Marker
                                                    coordinate={{
                                                        latitude: this.state.coords.lat,
                                                        longitude: this.state.coords.lng
                                                    }}
                                                    title={this.state.venue.address}
                                                    description={"Event Venue"}
                                                />
                                            </MapView>
                                        </CardItem>
                                    </Card> : null
                                }
                                <Text>{" "}</Text>
                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="MaterialIcons" name="event-note"
                                              style={{color: '#303B43'}}/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontWeight: '200', fontSize: 12}} note>Venue Notes</Text>
                                        <Text style={{
                                            fontSize: 13,
                                            fontWeight: '200'
                                        }}>{this.state.venue.venue_notes}</Text>
                                        <Text style={{fontSize: 12, color: '#00adf5'}}>Read More...</Text>

                                    </Body>
                                </ListItem>
                                <Text>{""}</Text>
                                <Body>
                                    <Text style={{fontWeight: '200', fontSize: 13}}>{this.state.venue.name}</Text>
                                    <Text style={{fontWeight: '200', fontSize: 13}}>{this.state.venue.email}</Text>
                                    <Text note>{this.state.venue.state}</Text>
                                </Body>

                                <Body>
                                    <Icon type="Ionicons" name="car"/>
                                </Body>

                            </View>
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
    font:
        {
            fontWeight: 'bold',
            fontSize: 30,
        },
    card: {
        width: 300,
        height: 100,
    },
    text: {
        color: '#00adf5',
        fontSize: 13,

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
        width: 190,
        padding: 10,
        borderRadius: 5,
    },


});