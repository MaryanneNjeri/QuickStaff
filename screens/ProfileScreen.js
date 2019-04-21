import React from  'react'; 
import { StyleSheet,Text,Dimensions } from 'react-native';
import {Container,Header,Icon,Body, ListItem,Content,Left,Right,Switch, Thumbnail, Title, Subtitle} from 'native-base'
const { width } = Dimensions.get('window');
let icon={
    url:"https://images.unsplash.com/photo-1541713970063-ca9613c37dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
}
export default class ProfileScreen extends  React.Component {
    logout=()=>{
        this.props.navigation.navigate('Auth');
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
   
               <ListItem icon> 
               <Left>
                   <Icon name="ios-notifications" />
                   </Left> 
                   <Body>
                   <Text>Notifications</Text>
                   </Body> 
                   <Right>
                       <Switch value={true}/>
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
    }
    
  });