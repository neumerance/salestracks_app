import { combineReducers } from 'redux';
import PointOfSalesReducer from './PointOfSalesReducer';

export default combineReducers({
  pointOfSales: PointOfSalesReducer
});
