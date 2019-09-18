import * as React from 'react';
import {
  Content, Container, Text, ListItem, Left, Icon, Body, Card, CardItem, Button,
} from 'native-base';
import {
  View, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { createOpenLink } from 'react-native-open-maps';
import _ from 'lodash';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  font:
        {
          fontWeight: 'bold',
          fontSize: 30,
        },

});

// eslint-disable-next-line react/prefer-stateless-function
export default class VenueDetailsTab extends React.Component {
  render() {
    const { venue, coords } = this.props;

    const location = { latitude: coords.lat, longitude: coords.lng };

    const mapZoom = createOpenLink(location);
    return (
      <Container>
        <Content>
          <View style={{ paddingRight: 10, paddingLeft: 10 }}>
            <Text style={styles.font}>
              {venue.name}
            </Text>

            <ListItem icon noBorder>
              <Left>
                <Icon
                  type="Entypo"
                  name="location-pin"
                  style={{ color: '#303B43' }}
                />
              </Left>
              <Body>
                <Text style={{ fontWeight: '200', fontSize: 12 }} note>Address</Text>
                <Text
                  style={{ fontSize: 12, fontWeight: '200' }}
                >
                  {venue.address}
                </Text>

              </Body>
            </ListItem>
            <ListItem icon noBorder>
              <Left>
                <Icon type="Entypo" name="phone" style={{ fontSize: 15, color: '#303B43' }} />
              </Left>
              <Body>
                <Text style={{ fontWeight: '200', fontSize: 12 }} note>Phone</Text>
                <Text style={{ fontSize: 12, fontWeight: '200' }}>{venue.phone}</Text>

              </Body>
            </ListItem>

            <Text />
            <Text style={{ fontSize: 15, fontWeight: '200' }}>Location</Text>

            {!_.isEmpty(coords)
              ? (
                <Card>
                  <CardItem cardBody>
                    <MapView
                      provider={PROVIDER_GOOGLE}
                      style={{ height: width / 2, width }}
                      region={{
                        latitude: coords.lat,
                        longitude: coords.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,

                      }}
                    >
                      <MapView.Marker
                        coordinate={{
                          latitude: coords.lat,
                          longitude: coords.lng,
                        }}
                        title={venue.address}
                        description="Event Venue"
                      />
                    </MapView>
                  </CardItem>
                </Card>

              ) : null
                        }
            <Text>{' '}</Text>
            <TouchableOpacity onPress={mapZoom}>
              <Text style={{ fontWeight: '200', color: '#1883CB' }}>Click here to view venue Location</Text>
            </TouchableOpacity>

            <Text>{' '}</Text>
            <ListItem icon noBorder>
              <Left>
                <Icon
                  type="MaterialIcons"
                  name="event-note"
                  style={{ color: '#303B43' }}
                />
              </Left>
              <Body>
                <Text style={{ fontWeight: '200', fontSize: 12 }} note>Venue Notes</Text>
                <Text style={{
                  fontSize: 13,
                  fontWeight: '200',
                }}
                >
                  {venue.venue_notes}
                </Text>
                <Text style={{ fontSize: 12, color: '#00adf5' }}>Read More...</Text>

              </Body>
            </ListItem>
            <Text />
            <Body>
              <Text style={{ fontWeight: '200', fontSize: 13 }}>{venue.name}</Text>
              <Text style={{ fontWeight: '200', fontSize: 13 }}>{venue.email}</Text>
              <Text note>{venue.state}</Text>
            </Body>

            <Body>
              <Icon type="Ionicons" name="car" />
            </Body>

          </View>

        </Content>
      </Container>
    );
  }
}
