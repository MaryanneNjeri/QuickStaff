import React from 'react';
import { Text, Container, Content } from 'native-base';
import Card from '../../components/common/controls/Card/Card';

// eslint-disable-next-line react/prefer-stateless-function
export default class Friends extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ padding: 15 }}>

          <Card borderShadow>
            <Text style={{ fontWeight: 'bold' }}>
Sed ut perspiciatis
              {'\n'}
            </Text>
            <Text>{' '}</Text>
            natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          </Card>
          <Text>{' '}</Text>
          <Card borderShadow>
            <Text style={{ fontWeight: 'bold' }}>
              perspiciatis
              {'\n'}
            </Text>
            <Text>{' '}</Text>
            natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,

          </Card>
          <Card borderShadow>
            <Text style={{ fontWeight: 'bold' }}>
              incididunt ut labore
              {'\n'}
            </Text>
            <Text>{' '}</Text>
            laudantium, totam rem aperiam, eaque ipsa
          </Card>

        </Content>

      </Container>
    );
  }
}
