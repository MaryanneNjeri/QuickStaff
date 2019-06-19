import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {
  Text, Container, Content, Card, CardItem, Body, Right, Left, Thumbnail,
} from 'native-base';

const { width } = Dimensions.get('window');
const icon_2 = {
  url: 'https://img.icons8.com/color/48/000000/alarm.png',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,

    height: width / 4,
    borderLeftWidth: 5,
    borderLeftColor: 'tomato',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
export default class Friends extends React.Component {
  render() {
    return (
      <Container>

        <Content>
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{ fontSize: 18 }}>Dolor sit amet</Text>
                  <Text note>totam rem aperiat</Text>

                </Body>
              </Left>

              <Right>
                <Thumbnail small source={icon_2} />
                <Text note style={{ fontSize: 10 }}> 10 days</Text>

              </Right>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{ fontSize: 18 }}>Tempor incididunt</Text>
                  <Text note>labore et dolore</Text>
                </Body>
              </Left>

              <Right>
                <Thumbnail small source={icon_2} />
                <Text note style={{ fontSize: 10 }}> 1 month</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{ fontSize: 18 }}>Excepteur sint </Text>
                  <Text note>occaecat cupidatat </Text>
                </Body>
              </Left>

              <Right>
                <Thumbnail small source={icon_2} />
                <Text note style={{ fontSize: 10 }}> 2 months</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

      </Container>
    );
  }
}
