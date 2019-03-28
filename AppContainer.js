import { createAppContainer,createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Friends from './screens/Friends';
/*
A stack navigator works like a stacks dishes  each screen we navigate to pushed to the top of 
the screen  and when we hit the back button 
the screen pop off the top of the stack.
*/

const AppNavigator = createStackNavigator({ 
    // this creates our small stack for navigation 
    HomeScreen: {screen:HomeScreen},
    Friends: {screen:Friends}
}); 
const AppContainer = createAppContainer(AppNavigator) 

export default AppContainer;