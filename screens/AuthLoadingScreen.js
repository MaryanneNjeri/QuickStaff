import React from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, View, StyleSheet} from 'react-native';

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._signInAsync()
    }

    // Fetch the token from storage then navigate to our appropriate place
    _signInAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AuthLoadingScreen