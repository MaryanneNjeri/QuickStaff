import React from  'react'; 
import { StyleSheet,ListView} from 'react-native';
import { Container,Header,Content,Button,Icon,List,ListItem,Text,Toast} from 'native-base'
import { randomUI12 } from 'uuid-js';
const events = [
    'Otis Schinner',
    'Domingo Streich',
    'Prof. Michelle Muller IV',
    'Charlie Dibbert DDS',
    'Ashlynn Gorczany',
    'Domingo Streich',
    'Swimming with the Dolphins',
    'Hiking',

]
export default class Friends extends  React.Component {
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !==r2});
        this.state = {
            basic: true,
            ListViewData: events
        };

    }
    deleteRow(secId,rowId,rowMap){
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData=[...this.state.ListViewData];
        newData.splice(rowId,1);
        this.setState({ListViewData:newData})
    }
render() {
    return(
       
       <Container>
           <Content padder>
               <List 
               leftOpenValue ={75}
               rightOpenValue={-75}
               dataSource={this.ds.cloneWithRows(this.state.ListViewData)}
               renderRow={event =>
                <ListItem>
                    <Text> {event}</Text>
                </ListItem>} 
                renderLeftHiddenRow={event=>
                 <Button success full onPress={()=>alert('Invite Accepted') }>
                    <Icon active name="md-checkmark-circle-outline"/>
                </Button>} 
                renderRightHiddenRow={event=>
                    <Button danger full onPress={()=>alert('Invite Declined')}>
                   <Icon active name="md-close-circle-outline"/>
                    </Button>}
                />
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