import React from 'react';
import { Container, Content, View } from 'native-base';
import Button from '../common/buttons/Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class DisabledButton extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Content>
          <View style={{
            justifyContent: 'center', bottom: 0, alignItems: 'center', marginTop: 20,
          }}
          >
            <Button disabled>Load More</Button>
          </View>
        </Content>
      </Container>
    );
  }
}
