import React from  'react'; 
import { StyleSheet } from 'react-native';
import {Text,Container,Content} from 'native-base';
export default class Friends extends  React.Component {
render() {
    return(
        <Container>
            <Content>
                <Text>Notification</Text>
                </Content>
            </Container>
    );
}
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });