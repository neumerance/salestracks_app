import {createStackNavigator, createAppContainer} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import PointOfSales from './screens/PointOfSales';
import LoginScreen from './screens/LoginScreen';
import AuthProtector from './components/AuthProtector';

export default createAppContainer(
  createStackNavigator({
    PointOfSales: { screen: PointOfSales },
    WelcomeScreen: { screen: AuthProtector(WelcomeScreen) },
    LoginScreen: { screen: LoginScreen },
  })
);
