import React from 'react';
import { Content, Container } from 'native-base';
import EditProfile from '../../components/profile/EditProfile';

// eslint-disable-next-line react/prefer-stateless-function
export default class EditScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, padding: 15 }}>

          <EditProfile />

        </Content>
      </Container>
    );
  }
}
