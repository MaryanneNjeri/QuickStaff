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
import { StyleSheet,Dimensions} from 'react-native';
import { Container,Content,Text,Card,CardItem,ListItem, Left,Icon,Body,Segment, Button} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import MapView ,{PROVIDER_GOOGLE,Marker} from 'react-native-maps'
const { width } = Dimensions.get('window');

export default class EventDetailsScreen extends  React.Component { 

render() {
    return(
       <Container style={styles.container}>
         <Content>
           <Text style={styles.font}>Stand Up Comedy Show</Text> 

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
            <Text>{" "}</Text>
            <Grid>
             <Row>
               <Card style={styles.call}>
                  <Body>
                   <Text note>April</Text> 
                     <Text>
                       Friday 20th
                       </Text> 
                       <Text note>7:00pm to 8:00pm</Text>
                     </Body>
                  
                 </Card> 
                 <Card style={styles.call}>
                 <Body>
                   <Text note>April</Text>
                     <Text>
                       Sat 22nd
                       </Text> 
                       <Text note>7:00pm to 8:00pm</Text>
                     </Body>
                  
                 </Card> 
                 <Card style={styles.call}>
                 <Body>
                 <Text note>May</Text>
                     <Text>
                       Friday 20th
                       </Text> 
                       <Text note>7:00pm to 8:00pm</Text>
                     </Body>
                  
                 </Card> 
                 
               </Row>
              </Grid>

            <Text>{" "}</Text> 
            <Text>Location</Text>
            <Card>
              <CardItem cardBody>
              <MapView
              provider={PROVIDER_GOOGLE}
              style={{height:width/2, width:width}}
              region={{
                latitude: 42.726200,
                longitude: -71.19089,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421 
                
              }}
             >
              <MapView.Marker
            coordinate={{latitude: 42.726200,
            longitude: -71.19089}}
            title={"Bobbie Volkman"}
            description={"Event Venue"}
         />
             </MapView>
              </CardItem>
              </Card> 
               <Text>{" "}</Text>  
               <Card>
            <CardItem>
            <Left> 
            <Icon type="FontAwesome" name="sticky-note" />
            <Text>Venue Notes</Text> 
            </Left>
            </CardItem> 
            <CardItem><Text>{" "}</Text>
              <Body>
          <Text style={{fontSize:15}}>{event_details.Team_manager_notes}</Text> 
          <Text style={{fontSize: 10, color:'#00adf5'}}>Read More...</Text>
          </Body>
          </CardItem>
            </Card> 
               <Body>
              <Text>{event_details.venue}</Text> 
              <Text note>{event_details.address}</Text>
              </Body> 
              <Body>
                <Icon  type="Ionicons" name="car"/>
              </Body> 
              <Segment>
                <Button first active> 
                <Text>Accept Invite</Text>
                </Button> 
                <Button last> 
                <Text>Decline Invite</Text>
                </Button>
                </Segment>
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
  
  }, 
  Thumb:{
    height: 10,
    width:20
  },
  call:{
    padding:10,
    borderRadius :5,
  }
  });