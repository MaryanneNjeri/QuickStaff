import React from 'react';
import {
  Body, Icon, Left, List, ListItem, Right, Text,
} from 'native-base';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class ListComponent extends React.Component {
  render() {
    const {
      viewBlockouts, viewNotification, logOut, viewProfile, storybook,
    } = this.props;
    return (
      <List>
        <ListItem itemHeader>
          <Text>Settings</Text>
        </ListItem>
        <ListItem icon onPress={viewNotification}>
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
        <ListItem icon onPress={viewBlockouts}>
          <Left>
            <Icon type="Entypo" name="block" style={{ fontSize: 20 }} />
          </Left>
          <Body>
            <Text>Blockouts</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon onPress={viewProfile}>
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
        <ListItem icon onPress={storybook}>
          <Left>
            <Icon name="ios-paper" />
          </Left>
          <Body>
            <Text>Storybook</Text>
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
        <ListItem icon onPress={logOut}>
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
ListComponent.propTypes = {
  viewBlockouts: PropTypes.func.isRequired,
  viewNotification: PropTypes.func.isRequired,
  viewProfile: PropTypes.func.isRequired,
  storybook: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,


};
