import React from 'react';
import {
  Container,
  Content,
  ActionSheet,
  Toast,
  Segment,
  Icon, Text, Body, View,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEvents } from '../../redux/events/action';
import HeaderComponent from '../../components/events/HeaderComponent';
import { logout } from '../../components/lib/functions/auth/logout';
import Error from '../../components/events/Error';
import Loader from '../../components/general/Loader';
import EventListView from '../../components/events/EventListView';
import EventListFilter from '../../components/events/EventListFilter';
import EventCalendarView from '../../components/events/EventsCalendarView';
import Button from '../../components/common/buttons/Button';
import FormInput from '../../components/common/controls/Form/FormInput';
import PaginatorComponent from '../../components/events/PaginatorComponent';

const _ = require('lodash');

const buttons = [

  { text: 'Logout', icon: 'close', iconColor: 'red' },
  { text: 'Close', icon: 'close', iconColor: 'red' },
];
const cancelIndex = 2;

class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
      modalVisible: false,
      visible: false,
      searchValue: '',
      events: [],
    };
    this.offset = 1;
  }

  componentDidMount() {
    const { dispatch, events } = this.props;
    dispatch(fetchEvents({ offset: this.offset }));
    this.setState({
      events: events.data,
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      events: nextProps.events.data,
    });
  }

    eventDetails = (id) => {
      this.props.navigation.navigate('EventDetails', { id });
    };

    calendarView = () => {
      this.setState({ mode: false });
    };

    listView = () => {
      this.setState({ mode: true });
    };

    searchEvent = () => {
      this.setState({ visible: true, mode: true });
    };

    closeSearch = () => {
      this.setState({ visible: false });
    };

    getTask = (assignment, i) => (

      <EventListView
        key={i}
        i={i}
        status={assignment}
        assign={assignment.task.data.shift.data.event.data}
        eventDetails={this.eventDetails}
      />


    );

    openActionSheet = () => {
      ActionSheet.show(
        {
          options: buttons,
          cancelButtonIndex: cancelIndex,
          title: 'User settings',
        },
        (buttonIndex) => {
          if (buttonIndex == 0) {
            logout();
            Toast.show({
              text: 'Successfully Logged out',
              position: 'top',
              duration: 3000,
            });
            this.props.navigation.navigate('Auth');
          }
        },
      );
    };

    setModalVisible=() => {
      this.setState({ modalVisible: true });
    };

    closeModal =() => {
      this.setState({ modalVisible: false });
    };

    filterList = (list) => {
      const { dispatch } = this.props;
      dispatch(fetchEvents(list));
      // console.log(list);
      this.closeModal();
    };

   resetList = (list) => {
     const { dispatch } = this.props;
     list = {};
     dispatch(fetchEvents(list));
     this.closeModal();
   };

   filterEvents = () => {
     const { dispatch } = this.props;
     const { searchValue } = this.state;
     dispatch(fetchEvents({ search: searchValue }));
   };

   loadMore=() => {
     const { dispatch } = this.props;
     dispatch(fetchEvents({ offset: ++this.offset }));
   }

   render() {
     const { error, loading } = this.props;
     const {
       mode, modalVisible, visible, searchValue, events,
     } = this.state;

     if (error) {
       return (
         <Error {...this.props} />
       );
     }
     if (loading) {
       return (
         <Loader />
       );
     }
     return (
       <Container>
         <Content>
           <HeaderComponent openActionSheet={this.openActionSheet} />

           <Body style={{ flexDirection: 'row' }}>
             <Icon name="sort" type="MaterialIcons" style={{ fontSize: 23, color: '#303B43', fontWeight: 'bold' }} onPress={this.setModalVisible} />

             <Text>{'   '}</Text>
             <Text>{'   '}</Text>
             <Segment>
               <Button secondary onPress={this.listView} first>list view</Button>
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
                 label="Search for events"
                 value={searchValue}
                 onChangeText={searchValue => this.setState({ searchValue })}
                 rightIcon="search"
                 onPress={this.filterEvents}
                 size={20}
               />
             </View>
           ) : null}
           {modalVisible ? (
             <EventListFilter
               isVisible={modalVisible}
               closeModal={this.closeModal}
               filterList={this.filterList}
               resetList={this.resetList}
             />
           ) : null}

           { mode ? _.map(events, (assignment, i) => (
             this.getTask(assignment, i)


           ))

             : <EventCalendarView />}
           <PaginatorComponent loadMore={this.loadMore} />

         </Content>
       </Container>

     );
   }
}
EventScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
  events: state.events.items,
  meta: state.events.meta,
  loading: state.events.loading,
  error: state.events.error,
  profile: state.details.user,
});
export default connect(mapStateToProps)(EventScreen);
