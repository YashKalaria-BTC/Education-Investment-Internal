import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/index';

const NavigationStack = createStackNavigator(
  {
    HomeScreen: {screen: Home},
  },
  {
    headerMode: 'none',
  },
);

const navigator = createSwitchNavigator(
  {
    NavigationStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'NavigationStack',
    navigationOptions: {
      headerVisible: true,
    },
    cardStyle: {
      backgroundColor: '#ffffff',
    },
  },
);

export default createAppContainer(navigator);
