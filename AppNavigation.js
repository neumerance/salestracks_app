import {createStackNavigator, createAppContainer} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import PointOfSales from './screens/PointOfSales';
import LoginScreen from './screens/LoginScreen';
import AuthProtector from './components/AuthProtector';

export default createAppContainer(
  createStackNavigator({
    WelcomeScreen: { screen: AuthProtector(WelcomeScreen) },
    PointOfSales: { screen: AuthProtector(PointOfSales) },
    LoginScreen: { screen: LoginScreen },
  })
);
