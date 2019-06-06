import React from 'react';
import {Body, Container, Content, Header, Left, Right, Spinner, Text, Card,CardItem,View} from "native-base";
import {StyleSheet,Platform,LayoutAnimation,UIManager,TouchableOpacity,Dimensions } from 'react-native';
import {connect } from 'react-redux';
import {fetchBlockouts} from "../Redux/blockouts/blockoutAction";

const _ = require('lodash');
const { width } = Dimensions.get('window');
class BlockoutScreen extends  React.Component {
    constructor(){
        super();
        this.state={
            updated_height:0

        }
    }
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

        return (

            <Container style={styles.container}>
                <Content>
                    {_.map(blockouts.data,(blockout,i)=>(
                        <Card style={styles.card} key={i}>
                            <CardItem>
                                <Body>
                                    <Text>starts_at {blockout.starts_at}</Text>
                                </Body>
                                <Left>
                                    <TouchableOpacity activeOpacity={0.7} onPress={this.onClickFunction}>

                                        <Text>view reasons </Text>

                                    </TouchableOpacity>
                                </Left>
                                <View>
                                    <Text>{blockout.reason}</Text>
                                </View>
                            </CardItem>
                        </Card>
                    ))}


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
    card:{
        marginTop:10,
        width: width -30,
        height: width /4,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});
export default connect(mapStateToProps)(BlockoutScreen)