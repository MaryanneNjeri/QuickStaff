import React from 'react';
import {
  Body, Icon, Left, List, ListItem, Right, Text,
} from 'native-base';

export default class ListComponent extends React.Component {
  render() {
    return (
      <List>
        <ListItem itemHeader>
          <Text>Settings</Text>
        </ListItem>
        <ListItem icon onPress={this.props.viewNotification}>
          <Left>
            <Icon name="ios-notifications" />
          </Left>
          <Body>
            <Text>Notifications</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon onPress={this.props.viewBlockouts}>
          <Left>
            <Icon type="Entypo" name="block" />
          </Left>
          <Body>
            <Text>Blockouts</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Icon name="ios-paper" />
          </Left>
          <Body>
            <Text>Edit Info</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Icon name="ios-calendar" />
          </Left>
          <Body>
            <Text>Calendar</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem itemHeader>
          <Text>Support</Text>
        </ListItem>
        <ListItem icon>
          <Left>
            <Icon name="ios-help-circle-outline" />
          </Left>
          <Body>
            <Text>Help</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon onPress={this.props.logOut}>
          <Left>
            <Icon type="Feather" name="power" />
          </Left>
          <Body>
            <Text>Logout</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </List>
    );
  }
}
