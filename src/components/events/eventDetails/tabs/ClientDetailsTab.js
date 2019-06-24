import * as React from 'react';
import {
  Body, Container, Content, Icon, Left, ListItem, Text,
} from 'native-base';
import { Linking, View } from 'react-native';

export default class ClientDetailsTab extends React.Component {
  render() {
    const { client } = this.props;
    return (
      <Container>
        <Content>
          <View style={{ paddingRight: 10, paddingLeft: 10 }}>
            <Text />

            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
              {client.name}
            </Text>
            <Text>{' '}</Text>

            <ListItem icon noBorder>
              <Left>
                <Icon type="Ionicons" name="ios-people" />
              </Left>
              <Body>
                <Text style={{ fontWeight: '200', fontSize: 13 }}>{client.name}</Text>
                <Text
                  style={{ fontSize: 13, fontWeight: '200' }}
                >
                  {' '}
                  {client.email}
                </Text>
                <Text style={{ fontSize: 13, fontWeight: '200' }}>{client.phone}</Text>

              </Body>

            </ListItem>
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
                <Text style={{ fontWeight: '200', fontSize: 12 }} note>Client Notes</Text>
                <Text style={{ fontSize: 13, fontWeight: '200' }}>{client.notes}</Text>
                <Text style={{ fontSize: 12, color: '#00adf5' }}>Read More...</Text>

              </Body>
            </ListItem>
            <Text>{' '}</Text>
            <ListItem icon noBorder>
              <Left>
                <Icon
                  type="MaterialCommunityIcons"
                  name="web"
                  style={{ color: '#303B43' }}
                />
              </Left>
              <Body>
                <Text style={{ fontWeight: '200', fontSize: 12 }} note>Web site</Text>
                <Text style={{ fontSize: 12, fontWeight: '200' }}>
Check out the client
                                    website
                </Text>
                <Text
                  style={{ fontSize: 12, color: '#00adf5' }}
                  onPress={() => Linking.openURL(client.website)}
                >
view
                                    ....
                </Text>

              </Body>
            </ListItem>
          </View>
        </Content>
      </Container>
    );
  }
}
