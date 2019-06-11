import React from 'react';
import {Text, View} from "native-base";

export default class Error extends React.Component {
    render() {
        console.log(this.props);
        return (
            <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                <Text> An error occurred! {this.props.error.message}</Text>
            </View>
        )
    }
}