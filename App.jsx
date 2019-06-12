import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import MainAppNavigation from './navigation/MainAppNavigation';
import { store } from './src/redux/store';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
    // to use redux  with our app we'll have to wrap around provider tags
      <Root>
        <Provider store={store}>
          <MainAppNavigation />
        </Provider>
      </Root>
    );
  }
}
