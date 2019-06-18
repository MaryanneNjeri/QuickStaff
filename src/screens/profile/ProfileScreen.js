import React from 'react';
import { Container, Content, Toast } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../components/lib/functions/auth/logout';
import { fetchProfile } from '../../redux/profile/action';
import Loader from '../../components/general/Loader';
import Error from '../../components/profile/Error';
import HeaderComponent from '../../components/profile/HeaderComponent';
import GridComponent from '../../components/profile/GridComponent';
import ListComponent from '../../components/profile/ListComponent';

class ProfileScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProfile());
  }

    logOut = () => {
      logout();
      Toast.show({
        text: 'Successfully Logged out',
        position: 'top',
        duration: 3000,

      });
      this.props.navigation.navigate('Auth');
    };

    viewNotification = () => {
      this.props.navigation.navigate('Notifications');
    };

    viewBlockouts = () => {
      this.props.navigation.navigate('Blockouts');
    };

  resetPassword = () => {
    this.props.navigation.navigate('PasswordReset', { profile: this.props.profile });
  };


  render() {
    const { error, loading, profile } = this.props;

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
          <HeaderComponent profile={profile} />
          <GridComponent profile={profile} />
          <ListComponent
            logOut={this.logOut}
            viewBlockouts={this.viewBlockouts}
            viewNotification={this.viewNotification}
            resetPassword={this.resetPassword}

          />
        </Content>
      </Container>

    );
  }
}
ProfileScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
  profile: state.details.user,
  loading: state.details.loading,
  error: state.details.Error,
});
export default connect(mapStateToProps)(ProfileScreen);
