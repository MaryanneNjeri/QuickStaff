import React from 'react';
import AppContainer from './AppContainer';
import {Provider} from 'react-redux';
import {store} from './Redux/store';

export default class App extends React.Component {
    render() {

        return (
            // to use redux  with our app we'll have to wrap around provider tags
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}

