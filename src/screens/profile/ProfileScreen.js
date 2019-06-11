import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Icon, Body, ListItem, Content, Left, Right, List, Text, Toast} from 'native-base';
import {logout} from "../../components/logout";
import {fetchProfile} from '../../redux/profile/action';
import {connect} from 'react-redux';

import Loader from '../../components/generalComponents/Loader';
import Error from '../../components/profileComponents/Error'
import HeaderComponent from '../../components/profileComponents/HeaderComponent';
import GridComponent from '../../components/profileComponents/GridComponent'
class ProfileScreen extends React.Component {
    componentDidMount() {

        this.props.dispatch(fetchProfile())
    };
    logOut = () => {
        logout();
        Toast.show({
            text: "Successfully Logged out",
            position: "top",
            duration: 3000

        });

        this.props.navigation.navigate('Auth');
    };
    viewNotification = () => {
        this.props.navigation.navigate('Notifications')
    };

    viewBlockouts=()=>{
        this.props.navigation.navigate('Blockouts')
    };

    render() {
        const {error, loading} = this.props;
        if (error) {
            return (
               <Error {...this.props}/>
            )
        }
        if (loading) {
            return (
               <Loader/>
            )
        }
        return (
            <Container>
                <Content>
                    <HeaderComponent {...this.props}/>
                    <GridComponent {...this.props}/>
                    <List>
                        <ListItem itemHeader>
                            <Text>Settings</Text>
                        </ListItem>
                        <ListItem icon onPress={this.viewNotification}>
                            <Left>
                                <Icon name="ios-notifications"/>
                            </Left>
                            <Body>
                                <Text>Notifications</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={this.viewBlockouts}>
                            <Left>
                                <Icon type="Entypo" name="block"/>
                            </Left>
                            <Body>
                                <Text>Blockouts</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-paper"/>
                            </Left>
                            <Body>
                                <Text>Edit Info</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-calendar"/>
                            </Left>
                            <Body>
                                <Text>Calendar</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem itemHeader>
                            <Text>Support</Text>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-help-circle-outline"/>
                            </Left>
                            <Body>
                                <Text>Help</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={this.logOut}>
                            <Left>
                                <Icon type="Feather" name="power"/>
                            </Left>
                            <Body>
                                <Text>Logout</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    </List>

                </Content>
            </Container>

        );
    }
}

const mapStateToProps = state => ({
    profile: state.details.user,
    loading: state.details.loading,
    error: state.details.Error,
});

export default connect(mapStateToProps)(ProfileScreen)