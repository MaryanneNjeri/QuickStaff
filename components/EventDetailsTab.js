import React, { Component } from 'react';
import {StyleSheet, TouchableHighlight, View} from "react-native";
import {Body, Card, Container, Content, Icon, Left, ListItem, Text} from "native-base";
import {Row, Grid} from 'react-native-easy-grid';
import moment from 'moment';
import {AddEventCalendar}  from './AddEventCalendar';

export default class EventDetailsTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        };
    }
    setModalVisible = (visible) => {
        this.setState({
            isModalVisible: visible
        })
    };
    // we use a call back function to pass he props from child to the parent function
    closeModal = () => {
        this.setState({
            isModalVisible: false
        })

    };

    render() {

        return (
            <Container style={styles.container}>
                <Content>

                    {/*we only render this component if  the isModalVisible has been set to true*/}
                    {this.state.isModalVisible ? <AddEventCalendar  {...this.props} closeModal={this.closeModal}/>:null}
                    <View style={{paddingRight: 10, paddingLeft: 10}}>
                        <Text>{""}</Text>
                        <Text style={styles.font}>
                            {this.props.event.name}
                        </Text>

                        <Text>{" "}</Text>
                        <ListItem icon noBorder>
                            <Left>
                                <Icon type="EvilIcons" name="calendar"/>
                            </Left>
                            <Body>
                                <Text style={{fontWeight: '200', fontSize: 12}}>Event date</Text>

                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '200'
                                }}>{Date(this.props.event.starts_at)}</Text>
                                <TouchableHighlight onPress={() => {
                                    this.setModalVisible(true)
                                }}>
                                    <Text style={styles.text}>Add to calendar</Text>
                                </TouchableHighlight>
                            </Body>
                        </ListItem>
                        <Text>{" "}</Text>


                        <ListItem icon noBorder>
                            <Left>
                                <Icon type="EvilIcons" name="comment"/>
                            </Left>
                            <Body>
                                <Text style={{fontSize: 12}} note>Staff Invited</Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '200'
                                }}>{this.props.event.staff_invited}</Text>
                            </Body>
                        </ListItem>
                        <Text>{" "}</Text>
                        <ListItem icon noBorder>
                            <Left>
                                <Icon type="MaterialIcons" name="event-note"
                                      style={{color: '#303B43'}}/>


                            </Left>
                            <Body>
                                <Text style={{fontSize: 12}} note>Event Notes</Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '200'
                                }}>{this.props.event.event_notes}</Text>
                                <Text style={{fontSize: 12, color: '#00adf5'}}>Read More...</Text>

                            </Body>
                        </ListItem>
                        <Text>{" "}</Text>
                        <Grid>
                            <Row style={{paddingRight: 7}}>
                                <Card style={styles.call}>
                                    <Body>
                                        <Text note>Starts at</Text>
                                        <Text>{""}</Text>
                                        <Text style={{fontWeight: '200', fontSize: 15}}>
                                            {moment(this.props.event.starts_at).format('LL')}
                                        </Text>
                                        <Text note>{moment(this.props.event.starts_at).format('LTS')}</Text>

                                    </Body>

                                </Card>
                                <Card style={styles.call}>
                                    <Body>
                                        <Text note>Ends at</Text>

                                        <Text>{""}</Text>

                                        <Text style={{fontWeight: '200', fontSize: 15}}>
                                            {moment(this.props.event.ends_at).format('LL')}
                                        </Text>
                                        <Text note>{moment(this.props.event.ends_at).format('LTS')}</Text>
                                    </Body>

                                </Card>

                            </Row>
                        </Grid>
                        <Text>{" "}</Text>

                        <ListItem icon noBorder>
                            <Left>
                                <Icon type="MaterialIcons" name="event-note" style={{color: '#303B43'}}/>


                            </Left>
                            <Body>
                                <Text style={{fontSize: 12}} note>Manager Notes</Text>
                                <Text style={{
                                    fontSize: 13,
                                    fontWeight: '200'
                                }}>{this.props.event.manager_notes}</Text>
                                <Text style={{fontSize: 13, color: '#00adf5'}}>Read More...</Text>

                            </Body>
                        </ListItem>
                    </View>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    font:
        {
            fontWeight: 'bold',
            fontSize: 30,
        },
    text: {
        color: '#00adf5',
        fontSize: 13,

    },
    call: {
        width: 190,
        padding: 10,
        borderRadius: 5,
    },


});