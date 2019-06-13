import React from 'react';
import {
  Body, Container, Content, Right, Spinner, Text, Icon, View, Accordion,
} from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import { fetchBlockouts } from '../../redux/blockouts/action';

const _ = require('lodash');

const { width } = Dimensions.get('window');

class BlockoutScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBlockouts());
  }

  renderHeader(item, expanded) {
    return (
      <View style={styles.header}>
        <Body>
          <Text style={{ fontWeight: '200' }}>
            {' '}
Blockout
          </Text>
          <Text note style={{ fontSize: 13 }}>
            {' '}
Starts at
            {moment(item.starts_at).format('LL')}
          </Text>
          <Text note style={{ fontSize: 13 }}>
            {' '}
Ends at
            {moment(item.ends_at).format('LL')}
          </Text>

        </Body>
        <Right>
          {expanded ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
            : <Icon style={{ fontSize: 18 }} name="add-circle" />}
        </Right>
      </View>
    );
  }

  renderContent(item) {
    return (
      <Text style={styles.background}>
        {item.reason}
      </Text>


    );
  }

  render() {
    const { error, loading, blockouts } = this.props;
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
        <Content padder>
          {!_.isEmpty(blockouts.data) ? (
            <Accordion
              dataArray={blockouts.data}
              animation
              expanded
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
            />
          ) : null}


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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderWidth: 0.3,
    height: width / 4,
    color: '#BDC3C7',
    elevation: 1,
    margin: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'tomato',


  },
  background: {
    backgroundColor: '#e3f1f1',
    padding: 10,
    fontWeight: '200',
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },

});
BlockoutScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,

};
export default connect(mapStateToProps)(BlockoutScreen);
