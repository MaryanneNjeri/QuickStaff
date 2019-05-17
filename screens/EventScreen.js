import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Container,
    Content,
    Thumbnail,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Text,
    Icon,
    Tab,
    Tabs,
    TabHeading,
    View,
    Spinner
} from 'native-base';
import {fetchEvents} from '../Redux/eventAction';
import {fetchEventDetail} from "../Redux/eventDetailsAction";
import {connect} from 'react-redux';


const _ = require('lodash');


class EventScreen extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchEvents())


    }


    _signOutAsync = async () => {
        // await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    event_details = (id) => {
        this.props.dispatch(fetchEventDetail(id));
        this.props.navigation.navigate('EventDetails')
    };


    getContent =(i, shift)=> {
        return <Content key={i}>
            {_.map(shift, (detail, i) => (
                this.getList(i, detail)
            ))

            }

        </Content>;
    }
    
    getList=(i, detail)=> {
        if (detail.name) {
            return <List key={i}>
                <ListItem key={i} onPress={this.event_details(detail.id)}>

                    <Body>
                        <Text style={{fontWeight: '200'}}>{detail.name}</Text>
                        <Text note>{detail.starts_at}</Text>
                    </Body>
                    <Right>
                        <Icon active name="arrow-forward"/>
                    </Right>
                </ListItem>
            </List>;
        }
    }


    render() {
        const {error, loading, events} = this.props;
        if (error) {
            return (

                <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                    <Text> An error occurred! {error.message}</Text>
                </View>
            )
        }
        if (loading) {
            {
                console.log(loading)
            }
            return (

                <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                    <Spinner style={{height: 80}} size="large" color='#58D68D'/>

                </View>

            )
        }

        //


        return (


            <Container>
                <Content>


                    <Tabs>
                        <Tab heading={<TabHeading><Text>All</Text></TabHeading>}>
                            {
                                events.map((assignment, i) => {
                                    return (
                                        <View key={i}>
                                            {_.map(assignment.task, (shift, i) => (

                                                this.getContent(i, shift)

                                            ))


                                            }
                                        </View>
                                    );


                                })
                            }
                        </Tab>
                        <Tab heading={<TabHeading><Text>Today</Text></TabHeading>}>
                        </Tab>
                        <Tab heading={<TabHeading><Text>Tomorrow</Text></TabHeading>}>
                        </Tab>
                        <Tab heading={<TabHeading><Text>This Week</Text></TabHeading>}>
                        </Tab>
                    </Tabs>

                </Content>
            </Container>

        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


    logo: {
        width: 70,
        height: 40,
        marginRight: 0
    },
    row: {
        alignItems: 'center',
        paddingTop: 5,
        flexDirection: 'row',


    },
    direction: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',


    },
    centered: {
        alignItems: 'center'
    }

});
// to make the events accessible we use .. it will map the state from our reducer to props in screen.
const mapStateToProps = state => ({
    events: state.events.items,
    loading: state.events.loading,
    error: state.events.error
});

// the connect is used to connect  to our redux store

//mapStateToProps maps part of the state  into your components remember you cannot alter props that is why

export default connect(mapStateToProps)(EventScreen)