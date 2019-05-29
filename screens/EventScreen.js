import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Container,
    Content,
    List,
    ListItem,
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
import {connect} from 'react-redux';
import {getAuthConfig} from "../components/getAuthConfig";

const _ = require('lodash');

class EventScreen extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchEvents())
        console.log(getAuthConfig)
    }

    eventDetails = (id) => {
        this.props.navigation.navigate('EventDetails', {id: id})
    };
    getTask = (assignment, i) => {

        return (<Content key={i}>
                {
                    _.map(assignment, (assign, i) => (
                        this.getContent(i, assign)
                    ))
                }
            </Content>
        )

    };
    getContent = (i, assign) => {

        if (!assign.length) {

            return <List key={i}>
                <ListItem key={i} onPress={() => this.eventDetails(assign['task']['shift']['event'].id)}>

                    <Body>
                        <Text style={{fontWeight: '200'}}>{assign['task']['shift']['event'].name}</Text>
                        <Text note>{Date(assign['task']['shift']['event'].starts_at)}</Text>
                    </Body>
                    <Right>
                        <Icon active name="arrow-forward"/>
                    </Right>

                </ListItem>
            </List>
        }
    };


    render() {
        const {error, loading, events} = this.props;
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
            <Container>
                <Content>
                    <Tabs>
                        <Tab heading={<TabHeading><Text>All</Text></TabHeading>}>

                        </Tab>
                        <Tab heading={<TabHeading><Text>Today</Text></TabHeading>}>
                        </Tab>
                        <Tab heading={<TabHeading><Text>Tomorrow</Text></TabHeading>}>
                        </Tab>
                        <Tab heading={<TabHeading><Text>This Week</Text></TabHeading>}>
                        </Tab>
                    </Tabs>

                    {
                        _.map(events, (assignment, i) => (
                            this.getTask(assignment, i)

                        ))
                    }
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
    error: state.events.error,
});

// the connect is used to connect  to our redux store

//mapStateToProps maps part of the state  into your components remember you cannot alter props that is why

export default connect(mapStateToProps)(EventScreen)