import React from 'react';
import { Content, Container, Text } from 'native-base';

// eslint-disable-next-line react/prefer-stateless-function
export default class Empty extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, padding: 15, backgroundColor: '#e6e6e6' }}>
          <Text>No Event</Text>
        </Content>
      </Container>
    );
  }
}
