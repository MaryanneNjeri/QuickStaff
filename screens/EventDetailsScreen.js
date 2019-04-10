const event_details= 
    {
id: 6,
event: 'Domingo Streich',
event_owner:'Domingo Streich',
venue: ' Bobbie Volkman',
address:'163 Cullen Isle Suite 244 South Montanatown, ',
client:'Kozey, Kulas and Botsford',
Time:' May 10th 2019',
first_date: '10th 2019 at 8:27 am',
second_date:'13th 2019 at 11:27 am',
events_notes: 'Sit ad adipisci ab et nihil. Et architecto itaque consequatur eos odio dolorum odit. ',
Team_manager_notes:'Sit sint et doloribus magni sed neque voluptatem excepturi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque',
staff:'Lauren Jaskolski',
icon:"https://img.icons8.com/ultraviolet/40/000000/overtime.png"
}

import React from  'react'; 
import { StyleSheet} from 'react-native';
import { Container,Content,Text,Card,CardItem,ListItem, Left,Icon,Body} from 'native-base';

export default class EventDetailsScreen extends  React.Component { 

render() {
    return(
       <Container style={styles.container}>
         <Content>
           <Text style={styles.font}>Stand Up Comedy Show -Free</Text> 

           <Text style={styles.text}>by {event_details.event}</Text>
           <Text>{" "}</Text>
           <ListItem icon noBorder>
            <Left>
              <Icon type="EvilIcons" name="calendar"/>
              </Left>
              <Body>
                <Text>{event_details.Time}</Text>
                <Text note>{event_details.first_date} - {event_details.second_date} GMT+</Text>
                <Text style={styles.text}>Add to calendar</Text>
                </Body>
             </ListItem> 
             <Text>{" "}</Text>
             <ListItem icon noBorder>
            <Left>
              <Icon type="EvilIcons" name="location"/>
              </Left>
              <Body>
                <Text>Venue</Text>
                <Text note>{event_details.venue}</Text>
              </Body> 
             </ListItem>
             <Text>{" "}</Text>
             <Card>
            <CardItem>
            <Left> 
            <Icon type="FontAwesome" name="sticky-note" />
            <Text>Team Manager Notes</Text> 
            </Left>
            </CardItem> 
            <CardItem>
              <Body>
          <Text style={{fontSize:15}}>{event_details.Team_manager_notes}</Text> 
          <Text style={{fontSize: 10, color:'#00adf5'}}>Read More...</Text>
          </Body>
          </CardItem>
            </Card> 
            <Card>
            <CardItem>
            <Left> 
            <Icon type="FontAwesome" name="sticky-note" />
            <Text>Event notes</Text> 
            </Left>
            </CardItem> 
            <CardItem>
              <Body>
          <Text style={{fontSize:15}}>{event_details.events_notes}</Text> 
          <Text style={{fontSize: 10, color:'#00adf5'}}>Read More...</Text> 
          </Body>
          </CardItem>
            </Card>
          </Content>
         </Container>
      
      
      
    );
}
} 

const styles = StyleSheet.create({
    container: {
     padding: 10,
     justifyContent: 'space-between' 
    },
   font:
   {
   fontWeight: 'bold',
   fontSize: 30,
   },
   card:{
   width : 200,
   height: 100,
   },
   text:{
   color:'#00adf5',
   fontSize: 15,
   
   },
   logo: {
    width: 20,
    height: 10,
    marginRight:0
  },
  row:{
  alignItems: 'center',
  flexDirection: 'row',
  
  }
  });