import React from  'react'; 
import { StyleSheet, Dimensions,View ,Text} from 'react-native';
import { Card,Icon } from 'react-native-elements';
import { Agenda } from 'react-native-calendars';
const { width } = Dimensions.get('window');
// const data = this.props.screenProps.params
class Details extends React.Component{
    render(){
        return (
            <View style={styles.container}> 
           <Card containerStyle={styles.containerStyle}> 
             <Text >Events Available</Text>
            </Card>
            </View>
        )
    }
} 
class Empty extends React.Component{
  render(){
    return (
      <View style={styles.container}>
      <Card containerStyle={styles.containerStyle}> 
      <Text style={styles.text}> No Events Available</Text>
      </Card>
        </View>
    )
  }
}
export default class Friends extends  React.Component {
componentDidMount(){
  console.log(this.data)
}

   render() {
    return(  

        <Agenda
        current={Date()}
        minDate={'2019-01-01'}
        maxDate={'2020-01-01'} 
        pastScrollRange={50}
        futureScrollRange={50}
        onRefresh={() => console.log('refreshing...')}
        onDayPress={(day) => {console.log('selected day', day)}}
        onDayLongPress={(day) => {console.log('selected day', day)}}
        monthFormat={'MMMM,yyyy'}
        calendarWidth={width}
        onPressArrowLeft={substractMonth => substractMonth()}
        onPressArrowRight={addMonth => addMonth()} 
        markingType={'custom'}
        renderItem={() => {return (<Details/>);}}
        renderDay={() => {return (<View/>);}}
       
        renderEmptyDate={() => {return (<Empty/>);}}
        renderEmptyData = {() => {return (<Empty />);}}
        rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
        markedDates={{
            '2019-04-19': { 
             
              customStyles: {
                container: {
                  backgroundColor: '#00adf5',
                },
                text: {
                  color: 'white',
                  
                }, 
                
              },
            },
            '2019-05-22': { 
             
              customStyles: {
                container: {
                  backgroundColor: '#00adf5',
                },
                text: {
                  color: 'white',
                  
                }, 
                
              },
            },
            '2019-04-25': {
              customStyles: {
                container: {
                  backgroundColor: '#00adf5',
                  elevation: 2
                },
                text: {
                  color: 'white',
                },
              }
            },
            '2019-05-10': {
                customStyles: {
                  container: {
                    backgroundColor: '#00adf5',
                  },
                  text: {
                    color: 'white',
                    
                  },
                },
              },
        }}
        items={
            {'2019-04-19': [{text: 'item 1 - any js object'}],
             '2019-05-22': [{text: 'item 2 - any js object'}],
             '2019-04-25': [{text: 'item 3 - any js object'}],
             '2019-05-25': [{text: 'item 3 - any js object'}],
            }}
        theme={{
            backgroundColor: 'white',
            calendarBackground: 'white',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#f0f0f0',
            todayTextColor: 'tomato',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: '#2d4150',
            agendaKnobColor: '#00adf5',
            agendaDayNumColor: 'green',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          style={{
           height: 350
          }}
      />
    
        
    );
}
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
      },
      emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
      },
      containerStyle:{ 
        padding: 10, 
        height: 80,
        width: width -50,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
       },
       text:{ 
         alignItems:'center'

       }
  });