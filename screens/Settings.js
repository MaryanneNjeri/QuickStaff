import React from  'react'; 
import { StyleSheet,Text } from 'react-native';
import {Container,List,Button,Icon,Body, ListItem,Content,Left,Right,Switch} from 'native-base'

export default class Friends extends  React.Component {
    logout=()=>{
        this.props.navigation.navigate('Auth');
    }
render() {
    return(
        <Container>
            <Content>
   
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
  });