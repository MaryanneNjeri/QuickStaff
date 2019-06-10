import React from 'react';
import {Body,Header, Icon, Left, Right, Text} from "native-base";
export default class HeaderComponent extends React.Component {
    render() {
        return (

            <Header style={{backgroundColor: '#0066ff'}}>
                <Left/>
                <Body>
                    <Text style={{fontWeight: '200', color: 'white'}}>Events</Text>
                </Body>
                <Right>
                    <Icon type="Entypo" name="user" style={{color: 'white', fontSize: 25}}
                          onPress={this.openActionSheet}/>
                </Right>

            </Header>


        )
    }
}