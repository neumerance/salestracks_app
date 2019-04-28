import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './screens/MainScreen';
import PointOfSales from './screens/PointOfSales';
import LoginScreen from './screens/LoginScreen';

export default createAppContainer(
  createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    MainScreen: { screen: MainScreen },
    PointOfSales: { screen: PointOfSales },
  })
);
