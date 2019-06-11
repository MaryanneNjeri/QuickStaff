import React from 'react';
import {Container, Content, List, ListItem, Body, Right, Text, Icon, Tab, Tabs, TabHeading, ActionSheet, Toast} from 'native-base';
import {fetchEvents} from '../../redux/events/action';
import {connect} from 'react-redux';
import HeaderComponent from '../../components/eventComponents/HeaderComponent';
import {logout} from "../../components/logout";
import  Error from '../../components/eventComponents/Error';
import Loader from '../../components/eventComponents/Loader';
const _ = require('lodash');

var buttons = [

    {text:"Logout",icon:"close",iconColor:"red"},
    {text:"Close",icon:"close",iconColor:"red"}
];
var cancel_index = 2;

class EventScreen extends React.Component {
    async componentDidMount() {

        this.props.dispatch(fetchEvents())
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
    openActionSheet=()=>{
        ActionSheet.show(
            {
                options: buttons,
                cancelButtonIndex:cancel_index,
                title:'User settings'
            },
            (buttonIndex) =>{
                if (buttonIndex == 0) {
                    logout();
                    Toast.show({
                        text: "Successfully Logged out",
                        position: "top",
                        duration: 3000
                    });
                    this.props.navigation.navigate('Auth')
                }
            }
        )
    };
    render() {

        const {error, loading, events} = this.props;
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
                   <HeaderComponent openActionSheet={this.openActionSheet}/>

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
// to make the events accessible we use .. it will map the state from our reducer to props in screen.
const mapStateToProps = state => ({
    events: state.events.items,
    loading: state.events.loading,
    error: state.events.Error,
});

// the connect is used to connect  to our redux store
export default connect(mapStateToProps)(EventScreen)