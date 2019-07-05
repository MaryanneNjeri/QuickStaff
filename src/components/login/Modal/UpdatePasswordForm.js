import React from 'react';
import {
  Modal, StyleSheet, TouchableHighlight,
} from 'react-native';
import {
  Form, Icon, Text, View,
} from 'native-base';
import Button from '../../common/buttons/Button';
import FormInput from '../../common/controls/Form/FormInput';

const styles = StyleSheet.create({
  modalButton: {
    alignItems: 'center',
    marginTop: 30,
    width: 150,
    flexDirection: 'row',

  },
});
export default class UpdatePasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: '',
    };
  }

  render() {
    const {
      isVisible, closeModal,
    } = this.props;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={isVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <TouchableHighlight
                style={{ alignSelf: 'flex-end' }}

                onPress={closeModal}
              >
                <Text style={{ fontWeight: '200', color: '#303B43', fontSize: 13 }}>

                                        Close
                  <Icon
                    name="close"
                    type="EvilIcons"
                    style={{ fontSize: 20, color: '#303B43' }}
                  />
                </Text>
              </TouchableHighlight>
              <Icon
                type="FontAwesome"
                name="unlock-alt"
                style={{
                  fontSize: 80, color: '#0052cc', textAlign: 'center', fontWeight: '200',
                }}
              />
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '200', color: '#303B43' }}>Update Password</Text>
              </View>
              <View style={{ padding: 20 }}>
                <Form>
                  <FormInput
                    label="Verification Code"
                    floatingLabel
                    leftIcon="universal-access"
                    size={13}
                    color="#303B43"
                  />
                  <FormInput
                    label="New password"
                    floatingLabel
                    leftIcon="key"
                    size={13}
                    color="#303B43"
                  />
                  <FormInput
                    label="Confirm password"
                    floatingLabel
                    leftIcon="key"
                    size={13}
                    color="#303B43"
                  />
                  <Text>{' '}</Text>
                </Form>
              </View>
              <View style={styles.modalButton}>
                <Button medium>update Password</Button>
                <Text>{' '}</Text>
              </View>

            </View>
          </View>
        </Modal>

      </View>

    );
  }
}
