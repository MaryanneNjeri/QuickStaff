const events = [
{ 
  id: 1,
  event: 'Otis Schinner',
  event_owner:'Otis Schinner',
  client:'Effertz-Schaefer',
  venue: 'Laury Rohan',
  address:' 979 Smitham Ford Padbergtown, SC 00532-6392',
  client:'Kozey, Kulas and Botsford',
  Time:' April 12th 2019',
  first_date: 'Friday April 12th 2019 at 8:27 am',
  second_date:'Sunday April 14th 2019 at 9:27 am',
  events_notes: 'Saepe impedit asperiores ea consecteturConsequuntur aut neque voluptatem quisquam et ipsa. Atque et et facilis illo pariatur qui ea. Qui neque fugiat aperiam dolore repellat',
  Team_manager_notes:'',
  staff:'Adan Hodkiewicz',
  icon:'',

},
{ 
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
  staff:'Lauren Jaskolski'
},
{  
    id: 3,
    event: 'Prof. Michelle Muller IV',
    event_owner:'Prof. Michelle Muller IV',
    venue: 'Efren Barrows',
    address:'2078 Von Road Port Yvette, NY 60333',
    client:'Kozey, Kulas and Botsford',
    Time:' April 9th 2019',
    first_date: 'Tuesday April 9th 2019 at 8:27 am',
    second_date:'Thursday April 11th 2019 at 6:27 pm',
    events_notes: '',
    Team_manager_notes:'Facilis assumenda maxime delectus est. Eaque minima nesciunt saepe ',
    staff:'Darren Koss'
  },
  {   
      id: 4,
      event: 'Charlie Dibbert DDS',
      event_owner:'Charlie Dibbert DDS',
      venue: 'Delia Morar',
      address:' 2886 Lou Freeway Apt. 593 Lake Retta, GA 31119-2981',
      client:'Kozey, Kulas and Botsford',
      Time:' April 9th 2019',
      first_date: 'Tuesday April 9th 2019 at 8:27 am',
      second_date:'Friday April 12th 2019 at 7:27 pm',
      events_notes: 'Culpa tenetur labore est necessitatibus dicta consequatur suscipit dicta.',
      Team_manager_notes:'Optio molestias rem consequuntur hic. Debitis quia quisquam voluptas ',
      staff:'Bruce Wilderman'
    },
    {   
       id: 5,
        event: 'Ashlynn Gorczany',
        event_owner:'Ashlynn Gorczany',
        venue: 'Matilda Hirthe',
        client:'Kozey, Kulas and Botsford',
        address:' 8659 Weimann Extension Apt. 128 North Julio, NV 34053',
        Time:' April 8th 2019',
        first_date: 'Monday April 8th 2019 at 8:27 am',
        second_date:'Thursday April 11th 2019 at 2:27 pm',
        events_notes: 'Culpa tenetur labore est necessitatibus dicta consequatur suscipit dicta.',
        Team_manager_notes:'Optio molestias rem consequuntur hic. Debitis quia quisquam voluptas',
        staff:'Abner Becker'
      },
      { 
        id: 6,
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
        staff:'Lauren Jaskolski'
      },
]

import React from 'react';
import { StyleSheet, Text, View ,Button,Image,ScrollView} from 'react-native';
import { Card,Icon } from 'react-native-elements';
import { Font } from 'expo'; 
import Header from '../components/Header'; 



export default class EventScreen extends React.Component {
  static navigationOptions = {
    header: {visible:false}
  }
  _signOutAsync = async () => {
    // await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
 

 
  render() { 
    let icon = {
      url:"https://img.icons8.com/ultraviolet/40/000000/tear-off-calendar.png"
  }
   
    return (
      <ScrollView> 
        <View style={styles.centered}>
          {/* <Header 
          leftComponent={{ icon: 'menu', color: '#fff' }}
          /> */}
        </View>
       {
          events.map((event, key) => {
           return ( 
            
            <Card containerStyle={styles.containerStyle} key={key}>
            
            <Text style={styles.card_text}>{event.event}</Text>
            <View style={styles.row}>
            <Image resizeMode="contain" source={icon} style={styles.logo}/>
            <Text style={{fontSize: 10,textAlign: 'center',}}> {event.Time}</Text>
          </View>
            </Card>
           );
          })
        }
      
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </ScrollView>
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
  card_text :{
    alignItems: 'center',
  },
  containerStyle:{
    padding: 10, 
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
   },
   logo: {
    width: 40,
    height: 13,
    marginRight:0
  },
  row:{ 
    alignItems: 'center',
    paddingTop: 5,
    flexDirection: 'row',
    
    
  },
  centered: {
    alignItems: 'center'
  }

});