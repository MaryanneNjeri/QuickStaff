import React from 'react';
import {
  View, Text, Icon, Body, Form, Item, Label, Input, Button,
} from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 100,


  },
});
// eslint-disable-next-line react/prefer-stateless-function
export default class EditProfile extends React.Component {
  render() {
    return (

      <View style={{ marginTop: 22 }}>


        <Icon
          type="Entypo"
          name="user"
          style={{ fontSize: 100, color: '#0052cc', textAlign: 'center' }}
        />
        <View style={{ padding: 18 }}>
          <Form>
            <Item floatingLabel>
              <Icon
                type="Ionicons"
                name="md-people"
                style={{ fontSize: 15, color: '#303B43' }}
              />
              <Label style={{ color: '#303B43', fontSize: 10 }}>First Name</Label>
              <Input
                style={{ fontSize: 15 }}
              />
            </Item>
            <Item floatingLabel>
              <Icon
                type="Ionicons"
                name="md-people"
                style={{ fontSize: 15, color: '#303B43' }}
              />
              <Label style={{ color: '#303B43', fontSize: 10 }}>Last Name</Label>
              <Input
                style={{ fontSize: 15 }}
              />
            </Item>


            <Item floatingLabel>
              <Icon
                name="mail"
                type="Entypo"
                style={{ fontSize: 15, color: '#303B43' }}
              />
              <Label style={{ color: '#303B43', fontSize: 10 }}>Email</Label>
              <Input
                style={{ fontSize: 15 }}
              />
            </Item>

            <Item floatingLabel>
              <Icon
                type="AntDesign"
                name="phone"
                style={{ fontSize: 15, color: '#303B43' }}
              />
              <Label style={{ color: '#303B43', fontSize: 10 }}>Phone</Label>
              <Input
                style={{ fontSize: 15 }}
              />
            </Item>


          </Form>

          <View style={styles.modalButton}>
            <Button rounded style={styles.button}>
              <Text style={{
                textAlign: 'center',
                fontWeight: '200',
                color: 'white',
                fontSize: 13,
              }}
              >
Edit Profile
              </Text>

            </Button>
          </View>

        </View>


      </View>

    );
  }
}
