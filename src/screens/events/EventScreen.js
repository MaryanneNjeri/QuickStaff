import React from 'react';
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
    Spinner, Header, Left, ActionSheet, Toast
} from 'native-base';
import {fetchEvents} from '../../redux/events/action';
import {connect} from 'react-redux';
import {LinearGradient} from 'expo';
import {logout} from "../../components/logout";
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
                    <LinearGradient
                        colors={['#0066ff', '#0033cc']}
                        style={{flex: 1}}>
                    <Header style={{backgroundColor: '#0066ff'}}>
                        <Left/>
                        <Body>
                            <Text style={{fontWeight:'200',color:'white'}}>Events</Text>
                        </Body>
                        <Right>
                            <Icon type="Entypo" name="user" style={{color: 'white',fontSize: 25}} onPress={this.openActionSheet}/>
                        </Right>

                    </Header>
                    </LinearGradient>

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
    error: state.events.error,
});

// the connect is used to connect  to our redux store
export default connect(mapStateToProps)(EventScreen)