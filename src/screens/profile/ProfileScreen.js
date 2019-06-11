import React from 'react';
import {Container,Content,Toast} from 'native-base';
import {logout} from "../../components/logout";
import {fetchProfile} from '../../redux/profile/action';
import {connect} from 'react-redux';
import Loader from '../../components/generalComponents/Loader';
import Error from '../../components/profileComponents/Error';
import HeaderComponent from '../../components/profileComponents/HeaderComponent';
import GridComponent from '../../components/profileComponents/GridComponent';
import ListComponent from '../../components/profileComponents/ListComponent';

class ProfileScreen extends React.Component {
    componentDidMount() {

        this.props.dispatch(fetchProfile())
    };

    logOut = () => {
        logout();
        Toast.show({
            text: "Successfully Logged out",
            position: "top",
            duration: 3000

        });

        this.props.navigation.navigate('Auth');
    };
    viewNotification = () => {
        this.props.navigation.navigate('Notifications')
    };

    viewBlockouts = () => {
        this.props.navigation.navigate('Blockouts')
    };

    render() {
        const {error, loading} = this.props;
        if (error) {
            return (
                <Error {...this.props}/>
            )
        }
        if (loading) {
            return (
                <Loader/>
            )
        }
        return (
            <Container>
                <Content>
                    <HeaderComponent profile={this.props.profile}/>
                    <GridComponent profile={this.props.profile}/>
                    <ListComponent logOut={this.logOut} viewBlockouts={this.viewBlockouts}
                                   viewNotification={this.viewNotification}/>
                </Content>
            </Container>

        );
    }
}

const mapStateToProps = state => ({
    profile: state.details.user,
    loading: state.details.loading,
    error: state.details.Error,
});

export default connect(mapStateToProps)(ProfileScreen)