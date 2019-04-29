const event_details={
   
  id: 2,
  event: 'Domingo Streich',
  event_owner:'Domingo Streich',
  venue: ' Bobbie Volkman',
  address:'163 Cullen Isle Suite 244 South Montanatown, ',
  client:'Kozey, Kulas and Botsford',
  Time:' April 10th 2019',
  first_date: 'Wednesday April 10th 2019 at 8:27 am',
  second_date:'Saturday April 13th 2019 at 11:27 am',
  events_notes: 'Sit ad adipisci ab et nihil. Et architecto itaque consequatur eos odio dolorum odit. ',
  Team_manager_notes:'Sit sint et doloribus magni sed neque voluptatem excepturi. ',
  staff:'Lauren Jaskolski',
  url:'https://images.unsplash.com/photo-1554631492-a054feeae929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
}

import React from  'react'; 
import { StyleSheet, Dimensions,View,TouchableOpacity} from 'react-native';
import { Card,CardItem,Container,Content,Text,Body,Left,Right ,Icon, ListItem} from 'native-base';
import { Agenda } from 'react-native-calendars';
const { width } = Dimensions.get('window');

class Details extends React.Component{
  event_details=()=>{
    this.props.navigation.navigate('EventDetails')
  }
    render(){
        return (
            <Container> 
            <Content>
              <Body>
                <Text note style={{fontSize:10}}>Events Available</Text>
                </Body> 
                <TouchableOpacity onPress={this.event_details}>
           <Card  style={styles.containerStyle}> 
           <CardItem onPress={this.event_details}>
           <Left>
              <Body>
              <Text style={{fontSize:18}}>{event_details.event}</Text>
              <Text note style={{fontSize:10}}> by {event_details.client}</Text>
              <Text>{" "}</Text>
              <ListItem icon noBorder>
            <Left>
            <Icon type="EvilIcons" name="calendar"/>
              </Left>
              <Body>
                
                <Text note style={{fontSize:8}}>{event_details.Time}</Text>
              </Body> 
             </ListItem>
              </Body>
            </Left> 
        
                <Right>
                <Icon type="EvilIcons" name="location"/>
                <Text note style={{fontSize: 10}}>{event_details.venue}</Text>
                    
                    </Right>
             </CardItem>
            </Card>
            </TouchableOpacity>
            </Content>
            </Container>
        )
    }
} 
class Empty extends React.Component{
  render(){
    return (
     <Container>
       <Content>
          <Body>
          
         <Text>No Events Available</Text>
         </Body>
         </Content>
       </Container>
    )
  }
}
export default class Friends extends  React.Component {
componentDidMount(){
  console.log(this.data)
}

   render() {
    return(  

        <Agenda
        current={Date()}
        minDate={'2019-01-01'}
        maxDate={'2020-01-01'} 
        pastScrollRange={50}
        futureScrollRange={50}
        onRefresh={() => console.log('refreshing...')}
        onDayPress={(day) => {console.log('selected day', day)}}
        onDayLongPress={(day) => {console.log('selected day', day)}}
        monthFormat={'MMMM,yyyy'}
        calendarWidth={width}
        onPressArrowLeft={substractMonth => substractMonth()}
        onPressArrowRight={addMonth => addMonth()} 
        markingType={'custom'}
        renderItem={() => {return (<Details/>);}}
        renderDay={() => {return (<View/>);}}
       
        renderEmptyDate={() => {return (<Empty/>);}}
        renderEmptyData = {() => {return (<Empty />);}}
        rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
        markedDates={{
            '2019-04-19': { 
             
              customStyles: {
                container: {
                  backgroundColor: '#00adf5',
                },
                text: {
                  color: 'white',
                  
                }, 
                
              },
            },
            '2019-05-22': { 
             
              customStyles: {
                container: {
                  backgroundColor: '#00adf5',
                },
                text: {
                  color: 'white',
                  
                }, 
                
              },
            },
            '2019-04-25': {
              customStyles: {
                container: {
                  backgroundColor: '#00adf5',
                  elevation: 2
                },
                text: {
                  color: 'white',
                },
              }
            },
            '2019-05-10': {
                customStyles: {
                  container: {
                    backgroundColor: '#00adf5',
                  },
                  text: {
                    color: 'white',
                    
                  },
                },
              },
        }}
        items={
            {'2019-04-19': [{text: 'item 1 - any js object'}],
             '2019-05-22': [{text: 'item 2 - any js object'}],
             '2019-04-25': [{text: 'item 3 - any js object'}],
             '2019-05-25': [{text: 'item 3 - any js object'}],
            }}
        theme={{
            backgroundColor: 'white',
            calendarBackground: 'white',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#f0f0f0',
            todayTextColor: 'tomato',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: '#2d4150',
            agendaKnobColor: '#00adf5',
            agendaDayNumColor: 'green',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          style={{
           height: 350
          }}
      />
    
        
    );
}
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
      },
      emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
      },
      containerStyle:{ 
        marginLeft: 10,
        marginRight:10,
        marginTop: 15,
        
        height: width / 3.5 ,
        borderRightWidth: 5,
        borderRightColor: 'tomato',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
       },
       text:{ 
         alignItems:'center'

       }
  });