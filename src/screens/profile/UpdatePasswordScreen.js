import React from 'react';
import { Container, Content, View } from 'native-base';
import UpdatePassword from '../../components/profile/UpdatePassword';

// eslint-disable-next-line react/prefer-stateless-function
export default class updatePasswordScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{ padding: 5 }}>
            <UpdatePassword />
          </View>
        </Content>
      </Container>
    );
  }
}
