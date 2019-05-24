import React from 'react';
import {StyleSheet, Dimensions, View,Linking} from 'react-native';
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
    Segment,
    Button,
    Tabs,
    Tab, TabHeading
} from 'native-base';
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
            client:{},
            venue:{},
            detail: {}
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
               this.getDetails(task,i)
            ))
        }


    };
    getDetails = (task,i)=>{
        if(!task.length){
            let ids = this.props.navigation.state.params.id;
            let found = _.find([task['task']['shift']['event']],['id', ids]);

            if(found) {
                this.setState({
                    event:found,
                    client:found['client'],
                    venue:found['venue']

                });

             }
        }

    };
    getVenue = (venue, i) => {
        if (venue.email) {
            return <View key={i}>
                <Text>{" "}</Text>
                <Text>Client Info</Text>
                <Text>{" "}</Text>

                <Text>{" "}</Text>
            </View>
        }

        if (venue.lat) {
            return <View key={i}>

                <Text>{" "}</Text>
                <Text>Location</Text>

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
                    <Text style={{fontWeight: '200'}}>{venue.name} {venue.state}</Text>
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

        return (
            <Container style={styles.container}>
                <Content>
                    <Tabs>
                        <Tab heading={<TabHeading><Text>Event</Text></TabHeading>}>
                        <View  style={{paddingRight: 10,paddingLeft: 10}}>
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
                                    <Text style={{fontWeight:'200',fontSize: 12}}>Event date</Text>

                                    <Text>{this.state.event.starts_at}</Text>
                                    <Text style={styles.text}>Add to calendar</Text>
                                </Body>
                            </ListItem>
                            <Text>{" "}</Text>


                            <ListItem icon noBorder>
                                <Left>
                                    <Icon type="EvilIcons" name="comment"/>
                                </Left>
                                <Body>
                                    <Text style={{fontWeight:'200',fontSize: 12}} >Status</Text>
                                    <Text note></Text>
                                </Body>
                            </ListItem>

                            <ListItem icon noBorder>
                                <Left>
                                    <Icon type="MaterialIcons" name="event-note" style={{fontSize: 13, color:'#303B43'}}/>


                                </Left>
                                <Body>
                                    <Text style={{fontWeight:'200',fontSize:12}}>Event Notes</Text>
                                    <Text style={{fontSize: 13,fontWeight:'200'}}>{this.state.event.event_notes}</Text>
                                    <Text style={{fontSize: 10, color: '#00adf5'}}>Read More...</Text>

                                </Body>
                            </ListItem>
                            <Text>{" "}</Text>
                            <Grid>
                                <Row>
                                    <Card style={styles.call}>
                                        <Body>
                                            <Text note>Starts at</Text>
                                            <Text>{""}</Text>
                                            <Text style={{fontWeight: '200', fontSize: 15}}>
                                                {this.state.event.starts_at}
                                            </Text>

                                        </Body>

                                    </Card>
                                    <Card style={styles.call}>
                                        <Body>
                                            <Text note>Ends at</Text>

                                            <Text>{""}</Text>
                                            <Text style={{fontWeight: '200', fontSize: 15}}>
                                                {this.state.event.ends_at}
                                            </Text>

                                        </Body>

                                    </Card>

                                </Row>
                            </Grid>
                            <Text>{" "}</Text>

                            <ListItem icon noBorder>
                                <Left>
                                    <Icon type="MaterialIcons" name="event-note" style={{fontSize: 13, color:'#303B43'}}/>


                                </Left>
                                <Body>
                                    <Text style={{fontWeight:'200',fontSize:12}}>Manager Notes</Text>
                                    <Text style={{fontSize: 13}}>{this.state.event.manager_notes}</Text>
                                    <Text style={{fontSize: 10, color: '#00adf5'}}>Read More...</Text>

                                </Body>
                            </ListItem>
                        </View>

                        </Tab>
                        <Tab heading={<TabHeading><Text>Client</Text></TabHeading>}>
                            <View  style={{paddingRight: 10,paddingLeft: 10}}>
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
                                        <Text style={{fontWeight: '200',fontSize: 13}}>{this.state.client.name}</Text>
                                        <Text style={{fontSize: 13,fontWeight:'200'}}> {this.state.client.email}</Text>
                                        <Text style={{fontSize: 13,fontWeight:'200'}}>{this.state.client.phone}</Text>

                                    </Body>

                                </ListItem>
                                <Text>{" "}</Text>

                            <ListItem icon noBorder>
                                <Left>
                                    <Icon type="MaterialIcons" name="event-note" style={{fontSize: 13, color:'#303B43'}}/>
                                </Left>
                                <Body>
                                    <Text style={{fontWeight:'200',fontSize:12}} note>Client Notes</Text>
                                    <Text style={{fontSize: 12,fontWeight:'200'}}>{this.state.client.notes}</Text>
                                    <Text style={{fontSize: 10, color: '#00adf5'}}>Read More...</Text>

                                </Body>
                            </ListItem>
                                <Text>{" "}</Text>
                            <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="MaterialCommunityIcons" name="web" style={{fontSize: 13,color:'#303B43'}}/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontWeight:'200',fontSize:12}} note>Web site</Text>
                                        <Text style={{fontSize: 12,fontWeight:'200'}}>Check out the client website</Text>
                                        <Text style={{fontSize: 10, color: '#00adf5'}} onPress={ ()=>Linking.openURL(this.state.client.website)}>view ....</Text>

                                    </Body>
                            </ListItem>
                            </View>
                        </Tab>
                        <Tab heading={<TabHeading><Text>Venue</Text></TabHeading>}>
                            <View  style={{paddingRight: 10,paddingLeft: 10}}>
                                <Text style={styles.font}>
                                    {this.state.venue.name}
                                </Text>
                                <Text>{" "}</Text>
                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="Entypo" name="location-pin" style={{fontSize: 13,color:'#303B43'}}/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontWeight:'200',fontSize:12}} note>Address</Text>
                                        <Text style={{fontSize: 12,fontWeight:'200'}}>{this.state.venue.address}</Text>

                                    </Body>
                                </ListItem>
                                <Text>{" "}</Text>
                                <ListItem icon noBorder>
                                    <Left>
                                        <Icon type="Entypo" name="phone" style={{fontSize: 13,color:'#303B43'}}/>
                                    </Left>
                                    <Body>
                                        <Text style={{fontWeight:'200',fontSize:12}} note>Phone</Text>
                                        <Text style={{fontSize: 12,fontWeight:'200'}}>{this.state.venue.phone}</Text>

                                    </Body>
                                </ListItem>

                                <Text>{""}</Text>
                                <Text style={{fontSize: 15,fontWeight:'200'}}>Location</Text>
                                {/*<Card>*/}

                                {/*    <CardItem cardBody>*/}
                                {/*        <MapView*/}
                                {/*            provider={PROVIDER_GOOGLE}*/}
                                {/*            style={{height: width / 2, width: width}}*/}
                                {/*            region={{*/}
                                {/*                latitude: venue.lat,*/}
                                {/*                longitude: venue.lng,*/}
                                {/*                latitudeDelta: 0.0922,*/}
                                {/*                longitudeDelta: 0.0421*/}

                                {/*            }}*/}
                                {/*        >*/}
                                {/*            <MapView.Marker*/}
                                {/*                coordinate={{*/}
                                {/*                    latitude: venue.lat,*/}
                                {/*                    longitude: venue.lng*/}
                                {/*                }}*/}
                                {/*                title={venue.city}*/}
                                {/*                description={"Event Venue"}*/}
                                {/*            />*/}
                                {/*        </MapView>*/}
                                {/*    </CardItem>*/}
                                {/*</Card>*/}
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