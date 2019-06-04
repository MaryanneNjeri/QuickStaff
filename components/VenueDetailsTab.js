import React from  'react';
import {Content, Container, Text, ListItem, Left, Icon, Body, Card, CardItem, Tab} from "native-base";
import {View, StyleSheet, Dimensions} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
const _ = require('lodash');
const {width} = Dimensions.get('window');

export default class VenueDetailsTab extends React.Component{

    render() {

        return (
            <Container>
                <Content>
                    <View style={{paddingRight: 10, paddingLeft: 10}}>
                        <Text style={styles.font}>
                            {this.props.venue.name}
                        </Text>

                        <ListItem icon noBorder>
                            <Left>
                                <Icon type="Entypo" name="location-pin"
                                      style={{color: '#303B43'}}/>
                            </Left>
                            <Body>
                                <Text style={{fontWeight: '200', fontSize: 12}} note>Address</Text>
                                <Text
                                    style={{fontSize: 12, fontWeight: '200'}}>{this.props.venue.address}</Text>

                            </Body>
                        </ListItem>
                        <ListItem icon noBorder>
                            <Left>
                                <Icon type="Entypo" name="phone" style={{fontSize: 15, color: '#303B43'}}/>
                            </Left>
                            <Body>
                                <Text style={{fontWeight: '200', fontSize: 12}} note>Phone</Text>
                                <Text style={{fontSize: 12, fontWeight: '200'}}>{this.props.venue.phone}</Text>

                            </Body>
                        </ListItem>

                        <Text>{""}</Text>
                        <Text style={{fontSize: 15, fontWeight: '200'}}>Location</Text>

                        {!_.isEmpty(this.props.coords)
                            ? <Card>
                                <CardItem cardBody>
                                    <MapView
                                        provider={PROVIDER_GOOGLE}
                                        style={{height: width / 2, width: width}}
                                        region={{
                                            latitude: this.props.coords.lat,
                                            longitude: this.props.coords.lng,
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421

                                        }}
                                    >
                                        <MapView.Marker
                                            coordinate={{
                                                latitude: this.props.coords.lat,
                                                longitude: this.props.coords.lng
                                            }}
                                            title={this.props.venue.address}
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
                                }}>{this.props.venue.venue_notes}</Text>
                                <Text style={{fontSize: 12, color: '#00adf5'}}>Read More...</Text>

                            </Body>
                        </ListItem>
                        <Text>{""}</Text>
                        <Body>
                            <Text style={{fontWeight: '200', fontSize: 13}}>{this.props.venue.name}</Text>
                            <Text style={{fontWeight: '200', fontSize: 13}}>{this.props.venue.email}</Text>
                            <Text note>{this.props.venue.state}</Text>
                        </Body>

                        <Body>
                            <Icon type="Ionicons" name="car"/>
                        </Body>

                    </View>

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

});