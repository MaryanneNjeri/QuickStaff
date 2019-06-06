import React from 'react';
import {Container,Content,Text} from "native-base";
import {StyleSheet } from 'react-native';

export default class BlockoutScreen extends  React.Component {
    render() {
        return (

            <Container style={styles.container}>
                <Content>
                    <Text> Blockout screen</Text>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});