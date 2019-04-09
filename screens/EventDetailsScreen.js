const event_details= 
    {
id: 6,
event: 'Domingo Streich',
event_owner:'Domingo Streich',
venue: ' Bobbie Volkman',
address:'163 Cullen Isle Suite 244 South Montanatown, ',
client:'Kozey, Kulas and Botsford',
Time:' May 10th 2019',
first_date: 'Wednesday April 10th 2019 at 8:27 am',
second_date:'Saturday April 13th 2019 at 11:27 am',
events_notes: 'Sit ad adipisci ab et nihil. Et architecto itaque consequatur eos odio dolorum odit. ',
Team_manager_notes:'Sit sint et doloribus magni sed neque voluptatem excepturi. ',
staff:'Lauren Jaskolski',
icon:"https://img.icons8.com/ultraviolet/40/000000/overtime.png"
}

import React from  'react'; 
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import { Card} from 'react-native-elements';
;

export default class EventDetailsScreen extends  React.Component { 

render() {
    let icon = {
        url:"https://img.icons8.com/ultraviolet/50/000000/overtime.png"
    } 
    let person_icon = {
      url:"https://img.icons8.com/ultraviolet/40/000000/user.png"
    }
    let venue_icon = {
        url:"https://img.icons8.com/ultraviolet/40/000000/marker.png"
      }
      let address_icon = {
        url:"https://img.icons8.com/ultraviolet/40/000000/worldwide-location.png"
      } 
      let client_icon = {
        url:"https://img.icons8.com/ultraviolet/40/000000/administrator-male.png"
      } 
      let time_icon = {
        url:"https://img.icons8.com/ultraviolet/40/000000/clock.png"
      } 
      let date_icon = {
        url:"https://img.icons8.com/ultraviolet/40/000000/calendar.png"
      } 
      let users_icon ={
          url: "https://img.icons8.com/ultraviolet/40/000000/conference-call.png"
      }
      let note_icon ={
          url:"https://img.icons8.com/ultraviolet/40/000000/bulleted-list.png"
      }
    return(
        /*
        the this.props.navigation as long as  the screen 
        is included in stacknavigato it inherits  many useful props from the navigation 
        object 
        */ 
      <View> 
          <Card>
        <View style={styles.row}>
        <Image resizeMode="contain" source={icon} style={styles.logo}/>
        <Text>Event</Text>
        </View>
        <Text>{event_details.event}</Text>  
        <View style={styles.row}>
        <Image resizeMode="contain" source={person_icon} style={styles.logo}/>
        <Text> Event Owner</Text>
        </View> 
        <Text>{event_details.event_owner}</Text>
        <View style={styles.row}>
        <Image resizeMode="contain" source={venue_icon} style={styles.logo}/>
        <Text> Venue </Text>
        </View>
        <Text>{event_details.venue}</Text> 
        <View style={styles.row}>
        <Image resizeMode="contain" source={address_icon} style={styles.logo}/>
        <Text> Address </Text>
        </View>
        <Text>{event_details.address}</Text> 
        <View style={styles.row}>
        <Image resizeMode="contain" source={client_icon} style={styles.logo}/>
        <Text> Client</Text>
        </View>
        <Text>{event_details.client}</Text>
        <View style={styles.row}>
        <Image resizeMode="contain" source={time_icon} style={styles.logo}/>
        <Text> Time </Text>
        </View> 
        <Text>{event_details.Time}</Text> 
        <View style={styles.row}>
        <Image resizeMode="contain" source={date_icon} style={styles.logo}/>
        <Text> First Date </Text>
        </View>
        <Text>{event_details.first_date}</Text>
        <View style={styles.row}>
        <Image resizeMode="contain" source={date_icon} style={styles.logo}/>
        <Text>Second Date </Text>
        </View>
        <Text>{event_details.second_date}</Text> 
        <View style={styles.row}>
        <Image resizeMode="contain" source={note_icon} style={styles.logo}/>
        <Text> Event Notes</Text>
        </View>
        <Text>{event_details.events_notes}</Text> 
        <View style={styles.row}>
        <Image resizeMode="contain" source={note_icon} style={styles.logo}/>
        <Text> Team Manager notes </Text>
        </View>
        <Text>{event_details.Team_manager_notes}</Text> 
        <View style={styles.row}>
        <Image resizeMode="contain" source={users_icon} style={styles.logo}/>
        <Text> Staff</Text>
        </View>
        <Text>{event_details.staff}</Text>
        </Card>
     </View>
      
      
    );
}
} 

const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   font:{
   fontWeight: 'normal',
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