import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/controls/Header/Header';

// eslint-disable-next-line react/prefer-stateless-function
export default class HeaderComponent extends React.Component {
  render() {
    const { openActionSheet } = this.props;
    return (

      <Header standard textColor="white" icon="user" iconColor="white" size={25} onPress={() => { openActionSheet(); }}>Events</Header>
    );
  }
}
HeaderComponent.propTypes = {
  openActionSheet: PropTypes.func.isRequired,
};
