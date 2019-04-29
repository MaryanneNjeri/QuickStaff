import React from  'react'; 
import { StyleSheet,Dimensions } from 'react-native';
import {Container,Header,Icon,Body, ListItem,Content,Left,Right, Thumbnail, Title, Subtitle,List,Text,Card,CardItem} from 'native-base'

const { width } = Dimensions.get('window');
let icon={
    url:"https://images.unsplash.com/photo-1541713970063-ca9613c37dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
}
let photo={
    url: "https://img.icons8.com/color/48/000000/facebook.png"
} 
let icon_2={
    url: "https://img.icons8.com/bubbles/100/000000/overtime.png"
}
export default class ProfileScreen extends  React.Component {
    logout=()=>{
        this.props.navigation.navigate('Auth');
    }
    view_notification=()=>{
        this.props.navigation.navigate('Notifications')
      }
render() {
    return(
        <Container>
            <Content> 
                <Header style={styles.header}> 
                
                <Left />
                    
                <Body>
                   
                    <Thumbnail large source={icon}/>
                    <Title>Domingo Streich</Title>
                    <Subtitle>Event Organiser</Subtitle>
                </Body>
                <Right />
                    
                 </Header> 
                
                 <Card style={styles.card}>
                    <CardItem>
                    
                         <Left>
                         <Thumbnail small source={photo}/>
                         <Text style={{fontSize:14}}>Add Facebook Link</Text>
                        </Left>
                       
                        <Right>
                            <Icon name="plus" type="Feather"  />
                        </Right>
                    </CardItem>
                </Card> 
                <Card style={styles.cardTwo}>
                     <CardItem style={styles.cardItem}>
                    
                         <Left>
                         <Thumbnail small source={icon_2}/>
                         <Text style={{fontSize:15}}>Available Events</Text>
                        
                        </Left>
                             
                             <Right>
                                 <Icon type="FontAwesome" name="eye"/>
                                 </Right>
                         </CardItem>
                </Card>
                <List>
               <ListItem  itemHeader> 
               <Text>Settings</Text>
               </ListItem>
               <ListItem icon onPress={this.view_notification}>
               <Left>
                   <Icon name="ios-notifications" />
                   </Left> 
                   <Body>
                   <Text>Notifications</Text>
                   </Body> 
                   <Right>
                   <Icon active name="arrow-forward" /> 
                    </Right>
                   </ListItem> 

                   <ListItem icon> 
               <Left>
                   <Icon name="person" />
                   </Left> 
                   <Body>
                   <Text>Account</Text>
                   </Body> 
                   <Right>
                   <Icon active name="arrow-forward" />
                    </Right>
                   </ListItem> 
                   <ListItem icon> 
                  <Left>
                   <Icon name="ios-paper"/>
                   </Left> 
                   <Body>
                   <Text>Edit Info</Text>
                   </Body> 
                   <Right>
                   <Icon active name="arrow-forward" />
                    </Right>
                   </ListItem> 
                   <ListItem icon> 
                  <Left>
                   <Icon name="ios-calendar" />
                   </Left> 
                   <Body>
                   <Text>Calendar</Text>
                   </Body> 
                   <Right>
                   <Icon active name="arrow-forward" />
                    </Right>
                   </ListItem>
                   <ListItem  itemHeader> 
                   <Text>Support</Text>
                   </ListItem>
                   <ListItem icon> 
                  <Left>
                   <Icon type="Entypo" name="location-pin" />
                   </Left> 
                   <Body>
                   <Text>Location </Text>
                   </Body> 
                   <Right>
                   <Icon active name="arrow-forward" />
                    </Right>
                   </ListItem>
                   <ListItem icon> 
                  <Left>
                   <Icon name="ios-help-circle-outline" />
                   </Left> 
                   <Body>
                   <Text>Help</Text>
                   </Body> 
                   <Right>
                   <Icon active name="arrow-forward" />
                    </Right>
                   </ListItem> 
                   <ListItem icon> 
                  <Left>
                   <Icon  type="Feather" name="power" onPress={this.logout} />
                   </Left> 
                   <Body>
                   <Text>Logout</Text>
                   </Body> 
                   <Right>
                   <Icon active name="arrow-forward" />
                    </Right>
                   </ListItem> 
                   </List>
               
               </Content>
        </Container>
       
    );
}
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
       
       height: width / 3
    },
    card:{
        marginLeft: 10,
        marginRight:10,
        marginTop: 15,
        borderRadius: 3,
        height: width / 6 ,
        borderLeftWidth: 70,
        borderLeftColor: '#0052cc',
        borderRightWidth: 5,
        borderRightColor: '#0052cc',
        
    },
    cardTwo:{
        marginLeft: 10,
        marginRight:10,
        marginTop: 15,
        borderRadius: 3,
        height: width / 6 ,
        borderRightWidth: 70,
        borderRightColor: '#0052cc',
        borderLeftWidth: 5,
        borderLeftColor: '#0052cc'
        
    }
    
  });