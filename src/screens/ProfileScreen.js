import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Container, Icon, Body, ListItem, Content, Left, Right, List, Text, Toast, Spinner, Card} from 'native-base';
import {logout} from "../components/logout";
import {fetchProfile} from '../../redux/profile/action';
import {connect} from 'react-redux';
import {LinearGradient} from "expo";
import {Row, Grid} from 'react-native-easy-grid';

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
        const {error, loading, profile} = this.props;
        if (error) {

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
            <Container>
                <Content>
                    <View style={styles.header}>
                        <LinearGradient
                            colors={['#0066ff', '#0033cc']}
                            style={{flex: 1}}
                        />
                    </View>
                    <Image style={styles.avatar} source={{uri: profile.profile_image}}/>
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={{fontWeight: '200', fontSize: 20}}>{profile.name}</Text>
                            <Text note>{profile.role_name}</Text>
                            <Text>{""}</Text>
                            <View style={{flexDirection:'row' }}>
                                <Text note><Icon type="Entypo" name="phone" style={{fontSize: 15, fontWeight: '100',color:'#BDC3C7'}}/>{profile.phone}</Text>
                                <Text>{""}</Text>
                                <Text note><Icon type="Entypo" name="mail" style={{fontSize: 15, fontWeight: '100',color:'#BDC3C7'}}/>{profile.email}</Text>
                            </View>
                        </View>
                    </View>
                    <Grid>

                        <Row style={{borderColor: '#BDC3C7',borderWidth: 0.3}}>
                            <Card style={styles.call} transparent>
                                <Body>
                                    <Text note style={{fontSize: 10}}> <Icon type="FontAwesome" name="money" style={{fontSize: 10}}/>  pay rate</Text>
                                    <Text>{" "}</Text>
                                    <Text style={{fontSize: 12,fontWeight:'200'}}>{profile.pay_rate}</Text>
                                </Body>

                            </Card>
                            <Card style={styles.call} transparent>
                                <Body>
                                    <Text note style={{fontSize: 10}}> <Icon type="Entypo" name="location-pin" style={{fontSize: 10}}/>  City</Text>
                                    <Text>{""}</Text>
                                    <Text style={{fontSize: 12,fontWeight:'200'}}>{profile.city}</Text>
                                </Body>

                            </Card>
                            <Card style={styles.call} transparent>
                                <Body>
                                    <Text note style={{fontSize: 10}}> <Icon type="MaterialCommunityIcons" name= "map" style={{fontSize: 10}}/>  Province</Text>
                                    <Text>{""}</Text>
                                    <Text style={{fontSize: 12,fontWeight:'200'}}>{profile.province}</Text>
                                </Body>

                            </Card>
                            <Card style={styles.call} transparent>
                                <Body>
                                    <Text note style={{fontSize: 10}}><Icon type="Ionicons" name= "md-time" style={{fontSize: 10}}/> Timezone</Text>
                                    <Text>{""}</Text>
                                    <Text style={{fontSize: 12,fontWeight:'200'}}>{profile.timezone}</Text>
                                </Body>

                            </Card>
                        </Row>
                    </Grid>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    call:{
        padding: 10,
        borderRightColor:'#BDC3C7',
        borderRightWidth:0.3
    }
});
const mapStateToProps = state => ({
    profile: state.details.user,
    loading: state.details.loading,
    error: state.details.error,
});


export default connect(mapStateToProps)(ProfileScreen)