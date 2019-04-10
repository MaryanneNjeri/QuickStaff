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
  url:'https://images.unsplash.com/photo-1553532070-2ca3b5876896?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',

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
  staff:'Lauren Jaskolski',
  url:'https://images.unsplash.com/photo-1554631492-a054feeae929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
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
    staff:'Darren Koss',
    url:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
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
      staff:'Bruce Wilderman',
      url:'https://images.unsplash.com/photo-1519916755070-61536165b3d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
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
        staff:'Abner Becker',
        url:'https://images.unsplash.com/photo-1512053459797-38c3a066cabd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      },
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
        url:'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
      },
]

import React from 'react';
import { StyleSheet} from 'react-native';
import {Container,Content,Thumbnail,List,ListItem,Left, Body,Right,Text,Icon,Header,Tab,Tabs,TabHeading} from 'native-base';
import { Font } from 'expo'; 


export default class EventScreen extends React.Component {
  static navigationOptions = {
    header: {visible:false}
  } 
  _signOutAsync = async () => {
    // await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
  event_details=()=>{
    this.props.navigation.navigate('EventDetails')
  }
 render() {   
  let icon = {
      url:"https://img.icons8.com/bubbles/50/000000/calendar.png"
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
         events.map((event,i) => {
           return (
          <List key={i}> 
          <ListItem thumbnail onPress={this.event_details}>
        <Left>
        <Thumbnail square source={{uri:event.url}} />
        </Left>
        <Body>
          <Text>{event.event}</Text>
          <Text note>{event.first_date} GMT+</Text>
          <Text note>{event.venue}</Text> 


          </Body>
        <Right>
        <Icon active name="arrow-forward" />
          
        </Right>
        </ListItem>
        </List>
           );
         })
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
  card_text :{
    fontSize: 15,
  },
  containerStyle:{
    padding: 0, 
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
    width: 70,
    height: 40,
    marginRight:0
  },
  row:{ 
    alignItems: 'center',
    paddingTop: 5,
    flexDirection: 'row',
    
    
  }, 
  direction:{
  flexDirection: 'row',
  flex:1,
  flexWrap: 'wrap',
  
  
  },
  centered: {
    alignItems: 'center'
  }

});