import React from 'react';
import {
  View, Text, Form, Content,
} from 'native-base';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity onPress={this.pickImage}>
            <Text style={{ fontWeight: '200', color: '#0099ff' }}>Upload Photo</Text>
          </TouchableOpacity>
          <Form>
            <FormInput
              label="Profile Image"
              floatingLabel
              value={profile.profile_image}
              onChangeText={(e) => {
                const prof = profile;
                profile.profile_image = e;
                this.setState({ profile: prof });
              }}
              leftIcon="camera-retro"
              color="#303B43"
              size={13}
            />

            <FormInput
              label="First Name"
              floatingLabel
              value={profile.first_name}
              onChangeText={(e) => {
                const prof = profile;
                profile.first_name = e;
                this.setState({ profile: prof });
              }}
              leftIcon="user"
              color="#303B43"
              size={13}
            />
            <FormInput
              label="Last Name"
              floatingLabel
              value={profile.last_name}
              onChangeText={(e) => {
                const prof = profile;
                profile.last_name = e;
                this.setState({ profile: prof });
              }}
              leftIcon="users"
              color="#303B43"
              size={13}
            />

            <FormInput
              label="Email"
              floatingLabel
              value={profile.email}
              onChangeText={(e) => {
                const prof = profile;
                profile.email = e;
                this.setState({ profile: prof });
              }}
              leftIcon="envelope"
              color="#303B43"
              size={13}
            />
            <FormInput
              label="Phone"
              floatingLabel
              value={profile.phone}
              onChangeText={(e) => {
                const prof = profile;
                profile.phone = e;
                this.setState({ profile: prof });
              }}
              leftIcon="phone"
              color="#303B43"
              size={13}
            />
          </Form>
          <View style={styles.modalButton}>
            <Button primary textColor="white" onPress={this.editProfile}>Edit Profile</Button>
          </View>

        </View>


      </Content>

    );
  }
}
