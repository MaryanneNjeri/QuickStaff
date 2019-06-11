import React from 'react';
import MainAppNavigation from './navigation/MainAppNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import { Root } from "native-base"

export default class App extends React.Component {
    render() {

        return (
            // to use redux  with our app we'll have to wrap around provider tags
            <Root>
            <Provider store={store}>
                <MainAppNavigation/>
            </Provider>
            </Root>
        );
    }
}

