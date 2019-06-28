import React from 'react';
import {
  View, Text, Icon, Form, Item, Label, Input, Content, Body,
} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { ImagePicker, Permissions, Constants } from 'expo';
import { store } from '../../redux/store';
import editProfile from '../../api/editProfile.api';
import Button from '../common/buttons/Button';
import FormInput from '../common/controls/Form/FormInput';

const styles = StyleSheet.create({
  modalButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 100,


  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    alignSelf: 'center',
    position: 'absolute',


  },
});
// eslint-disable-next-line react/prefer-stateless-function
export default class EditProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {},

    };
  }

  componentDidMount() {
    const profile = store.getState().details.user;
    this.setState({
      profile: {
        first_name: profile.first_name,
        last_name: profile.last_name,
        phone: profile.phone,
        email: profile.email,
        profile_image: profile.profile_image,
      },

    });
  }

  editProfile=() => {
    const { profile } = this.state;
    editProfile(profile);
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  pickImage=async () => {
    this.getPermissionAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      const profile = store.getState().details.user;
      this.setState({
        profile: {
          first_name: profile.first_name,
          last_name: profile.last_name,
          phone: profile.phone,
          email: profile.email,
          profile_image: result.uri,
        },
      });
    }
  };


  render() {
    const { profile } = this.state;
    return (

      <Content contentContainerStyle={{ marginTop: 22 }}>
        <Image style={styles.avatar} source={{ uri: profile.profile_image }} />


        <View style={{ padding: 18, paddingTop: 120 }}>
          <Form>
            <Item floatingLabel>
              <Label style={{ color: '#303B43', fontSize: 10 }}>Profile Image</Label>
              <Input
                style={{ fontSize: 15 }}
                value={profile.profile_image}
                onChangeText={(e) => {
                  const prof = profile;
                  profile.profile_image = e;
                  this.setState({ profile: prof });
                }}
              />
              <Icon
                type="Feather"
                name="upload"
                style={{ fontSize: 15, color: '#303B43' }}
                onPress={this.pickImage}
              />
            </Item>
            {/* <FormInput */}
            {/* label="Profile Image" */}
            {/* floatingLabel */}
            {/* value={profile.profile_image} */}
            {/* onChangeText={(e) => { */}
            {/* const prof = profile; */}
            {/* profile.profile_image = e; */}
            {/* this.setState({ profile: prof }); */}
            {/* }} */}
            {/* leftIcon="upload" */}
            {/* onPress={this.pickImage} */}
            {/* color="#303B43" */}
            {/* size={14} */}
            {/* /> */}
            <Item floatingLabel>
              <Icon
                type="Ionicons"
                name="md-people"
                style={{ fontSize: 15, color: '#303B43' }}
              />
              <Label style={{ color: '#303B43', fontSize: 10 }}>First Name</Label>
              <Input
                style={{ fontSize: 15 }}
                value={profile.first_name}
                onChangeText={(e) => {
                  const prof = profile;
                  profile.first_name = e;
                  this.setState({ profile: prof });
                }}
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
                value={profile.last_name}
                onChangeText={(e) => {
                  const prof = profile;
                  profile.last_name = e;
                  this.setState({ profile: prof });
                }}
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
                value={profile.email}
                onChangeText={(e) => {
                  const prof = profile;
                  profile.email = e;
                  this.setState({ profile: prof });
                }}
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
                value={profile.phone}
                onChangeText={(e) => {
                  const prof = profile;
                  profile.phone = e;
                  this.setState({ profile: prof });
                }}
              />
            </Item>
          </Form>
          <View style={styles.modalButton}>

            <Button primary textColor="white" onPress={this.editProfile}>Edit Profile</Button>
          </View>

        </View>


      </Content>

    );
  }
}
