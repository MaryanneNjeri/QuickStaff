import React from 'react';
import {Container, Content, Form, Body, Input, Label, Text, Icon, Item, Button} from "native-base";
import {StyleSheet, Modal, View, TouchableHighlight} from 'react-native';

class AddEventModal extends React.Component {

    render(){
        return (
            <Container>

                <Modal visible={this.props.isModalVisible}
                       animationType="slide"
                       transparent={false}>

                    <Content>

                        <View style={{marginTop: 22}}>
                            <TouchableHighlight
                                style={{alignSelf: "flex-end"}}

                                onPress={() => {
                                    this.props.closeModal(this.props.isModalVisible)
                                }}
                            >
                                <Text style={{fontWeight: '200', color: '#303B43', fontSize: 13}}> Close<Icon
                                    name="close" type="EvilIcons" style={{fontSize: 20, color: '#303B43'}}/></Text>
                            </TouchableHighlight>
                            <Body>

                                <Icon type="AntDesign" name="exclamationcircle"
                                      style={{fontSize: 100, color: '#0052cc', textAlign: "center"}}/>
                                <Text style={{fontSize: 20, fontWeight: "200", color: '#303B43'}}>Add Event to
                                    Calendar</Text>
                            </Body>
                            <View style={{padding: 18}}>
                                <Form>
                                    <Item floatingLabel>
                                        <Icon type="SimpleLineIcons" name="event"
                                              style={{fontSize: 15, color: '#303B43'}}/>
                                        <Label style={{color: '#303B43', fontSize: 10}}>Event Name</Label>
                                        <Input
                                            style={{fontSize: 15}}


                                            onChangeText={(event_name) => this.setState({event_name})}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Icon type="Ionicons" name="md-people"
                                              style={{fontSize: 15, color: '#303B43'}}/>
                                        <Label style={{color: '#303B43', fontSize: 10}}>Client</Label>
                                        <Input
                                            style={{fontSize: 15}}
                                            onChangeText={(client) => this.setState({client})}
                                        />
                                    </Item>


                                    <Item floatingLabel>
                                        <Icon name="clock" type="EvilIcons"
                                              style={{fontSize: 15, color: '#303B43'}}/>
                                        <Label style={{color: '#303B43', fontSize: 10}}>Starts at </Label>
                                        <Input
                                            style={{fontSize: 15}}
                                            onChangeText={(starts_at) => this.setState({starts_at})}
                                        />
                                    </Item>

                                    <Item floatingLabel>
                                        <Icon type="Entypo" name="location-pin"
                                              style={{fontSize: 15, color: '#303B43'}}/>
                                        <Label style={{color: '#303B43', fontSize: 10}}>Venue</Label>
                                        <Input
                                            style={{fontSize: 15}}
                                            onChangeText={(venue) => this.setState({venue})}

                                        />
                                    </Item>


                                </Form>

                                <View style={styles.modalButton}>
                                    <Button rounded style={styles.button} onPress={this.confirm_order}>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontWeight: '200',
                                            color: 'white',
                                            fontSize: 13
                                        }}>Add Event</Text>

                                    </Button>
                                </View>

                            </View>


                        </View>

                    </Content>

                </Modal>
            </Container>
        )
    }
}
const styles= StyleSheet.create({
    modalButton:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: 100



    }
});


export default AddEventModal

