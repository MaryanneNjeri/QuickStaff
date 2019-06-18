import React from 'react';
import { Content, Container, Text } from 'native-base';

// eslint-disable-next-line react/prefer-stateless-function
export default class EditScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, padding: 15 }}>
          <Text>Edit Screen</Text>

        </Content>
      </Container>
    );
  }
}
