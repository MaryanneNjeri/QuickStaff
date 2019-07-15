import React from 'react';
import {
  Body, Container, Content, Spinner, Text, View, List, ListItem,
} from 'native-base';
import { TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment/moment';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { fetchBlockouts } from '../../redux/blockouts/action';

class BlockoutScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBlockouts());
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
        <Content>
          {_.map(blockouts.data, (blockout, i) => (

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

          ))}

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
