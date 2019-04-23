import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './screens/MainScreen';
import PointOfSales from './screens/PointOfSales';

export default createAppContainer(
  createStackNavigator({
    MainScreen: { screen: MainScreen },
    PointOfSales: { screen: PointOfSales },
  })
);
