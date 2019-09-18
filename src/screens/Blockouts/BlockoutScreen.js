import React from 'react';
import {
  Body, Container, Content, Spinner, Text, View, List, ListItem, Icon, Segment,
} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment/moment';
import _ from 'lodash';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { fetchBlockouts } from '../../redux/blockouts/action';
import FormInput from '../../components/common/controls/Form/FormInput';
import Button from '../../components/common/buttons/Button';
import CalendarView from '../../components/Blockouts/CalendarView';

class BlockoutScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      filter: false,
      filtered: [],
      mode: true,
    };
  }

  componentDidMount() {
    const { dispatch, blockouts } = this.props;
    dispatch(fetchBlockouts());
    this.setState({
      filtered: blockouts.data,
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      filtered: nextProps.blockouts.data,
    });
  }

    closeSearch = () => {
      this.setState({ visible: false });
    };

    searchEvent = () => {
      this.setState({ visible: true });
    };

   handleChange=(e) => {
     const { blockouts } = this.props;
     let currentList = [];
     let newList = [];
     // if the search bar isn't empty
     if (e !== '') {
       currentList = blockouts.data;
       newList = currentList.filter((block) => {
         const lc = block.reason.toLowerCase();

         // change also the search term to lower case
         const filter = e.toLowerCase();
         return lc.includes(filter);
       });

     } else {
       newList = blockouts.data;
     }
     this.setState({
       filtered: newList,
     });
   };

   listView =() => {
     this.setState({
       mode: true,
     });
   };

   calendarView = () => {
     this.setState({
       mode: false,
     });
   };

   closeFilter = () => {
     this.setState({
       filter: false,
     });
   };

   filterByDate=() => {
     this.setState({
       filter: true,
     });
   };

   filter=(e) => {
     const { blockouts } = this.props;
     let currentList = [];
     let newList = [];

     if (e !== '') {
       currentList = blockouts.data;
       newList = currentList.filter((block) => {
         const lc = moment(block.starts_at).format(' LLL').toLowerCase();

         const filter = e.toLowerCase();
         return lc.includes(filter);
       });
     } else {
       newList = blockouts.data;
     }
     this.setState({
       filtered: newList,
     });
   };


   render() {
     const { error, loading } = this.props;
     const {
       visible, filtered, mode, filter,
     } = this.state;

     if (error) {
       return (

         <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
           <Text>
             {' '}
An error occurred!
             {error.message}
           </Text>
         </View>
       );
     }
     if (loading) {
       return (
         <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
           <Spinner style={{ height: 80 }} size="large" color="tomato" />

         </View>
       );
     }
     return (
       <Container>
         <Content contentContainerStyle={{ padding: 15 }}>
           <Body style={{ flexDirection: 'row' }}>
             <Icon
               name="sort"
               type="MaterialIcons"
               style={{ fontSize: 23, color: '#303B43', fontWeight: 'bold' }}
               onPress={this.filterByDate}
             />
             <Text>{'   '}</Text>
             <Text>{'   '}</Text>
             <Segment>
               <Button secondary active onPress={this.listView} first>list view</Button>
               <Button secondary onPress={this.calendarView} last>calendar view</Button>
             </Segment>
             <Text>{'   '}</Text>
             <Text>{'   '}</Text>
             <Icon name="search" onPress={this.searchEvent} type="Feather" style={{ fontSize: 20, color: '#0052cc' }} />
           </Body>
           {visible ? (
             <View style={{ padding: 15 }}>
               <TouchableOpacity onPress={this.closeSearch} style={{ alignSelf: 'flex-end' }}>
                 <Text style={{ fontSize: 15, fontWeight: '200', color: '#0052cc' }}>
                            Close
                   <Icon
                     name="close"
                     type="EvilIcons"
                     style={{ fontSize: 15, color: '#0052cc' }}
                   />
                 </Text>
               </TouchableOpacity>
               <FormInput
                 standard
                 label="Search for blockouts reasons"
                 floatingLabel
                 onChangeText={e => this.handleChange(e)}
               />
             </View>
           ) : null}
           {filter ? (
             <View style={{ padding: 15 }}>
               <TouchableOpacity onPress={this.closeFilter} style={{ alignSelf: 'flex-end' }}>
                 <Text style={{ fontSize: 15, fontWeight: '200', color: '#0052cc' }}>
                             Close
                   <Icon
                     name="close"
                     type="EvilIcons"
                     style={{ fontSize: 15, color: '#0052cc' }}
                   />
                 </Text>
               </TouchableOpacity>
               <FormInput
                 standard
                 label="Filter by date"
                 floatingLabel
                 onChangeText={e => this.filter(e)}
               />
             </View>
           ) : null}


           { mode

             ? _.map(filtered, (blockout, i) => (

               <List key={i}>
                 <ListItem>
                   <Body>
                     <Text style={{ fontWeight: '200', fontSize: 16 }}>{blockout.recurrence_text}</Text>
                     <Text style={{ fontWeight: '200', fontSize: 14 }} note>
                      Starts at:
                       {' '}
                       {' '}
                       {moment(blockout.starts_at).format('LLL')}
                     </Text>
                     <Text style={{ fontWeight: '200', fontSize: 14 }} note>
                      Ends at:
                       {' '}
                       {' '}
                       {moment(blockout.ends_at).format('LLL')}
                     </Text>
                     <TouchableHighlight onPress={this.viewDetails}>
                       <Text note style={{ fontSize: 13 }}>
                          Reason :

                         {blockout.reason}
                       </Text>
                     </TouchableHighlight>
                   </Body>
                 </ListItem>
               </List>


             )) : <CalendarView data={filtered} />}


         </Content>
       </Container>
     );
   }
}

const mapStateToProps = state => ({
  blockouts: state.blockouts.items,
  loading: state.blockouts.loading,
  error: state.blockouts.Error,
});

BlockoutScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,

};
export default connect(mapStateToProps)(BlockoutScreen);
