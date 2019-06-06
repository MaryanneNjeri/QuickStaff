import React from 'react';
import {Body, Container, Content, Header, Left, Right, Spinner, Text, View} from "native-base";
import {StyleSheet } from 'react-native';
import {connect } from 'react-redux';
import {fetchBlockouts} from "../Redux/blockouts/blockoutAction";

class BlockoutScreen extends  React.Component {
    componentDidMount() {
        this.props.dispatch(fetchBlockouts());

    }

    render() {
        const {error,loading,blockouts}  = this.props;
        if (error) {
            console.log(error);
            return (

                <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                    <Text> An error occurred! {error.message}</Text>
                </View>
            )
        }
        if (loading) {
            return (
                <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                    <Spinner style={{height: 80}} size="large" color='tomato'/>

                </View>
            )
        }
        console.log(blockouts);
        return (

            <Container style={styles.container}>
                <Content>

                    <Text> Blockout screen</Text>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    blockouts: state.blockouts.items,
    loading: state.blockouts.loading,
    error: state.blockouts.error,
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default connect(mapStateToProps)(BlockoutScreen)