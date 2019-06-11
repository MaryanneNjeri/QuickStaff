import React from 'react';
import {Body, Header, Icon, Left, Right} from "native-base";
import {Title} from '../styledComponents/general/general';

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <Header style={{backgroundColor: '#0066ff'}}>
                <Left/>
                <Body>
                    <Title>Events</Title>
                </Body>
                <Right>
                    <Icon type="Entypo" name="user" style={{color: 'white', fontSize: 25}}
                          onPress={() => {
                              this.props.openActionSheet()
                          }}/>
                </Right>
            </Header>
        )
    }
}
