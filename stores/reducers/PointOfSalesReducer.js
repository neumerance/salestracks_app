import { combineReducers } from 'redux';

const INITIAL_STATE = {
  products: [],
  currentSales: []
};

const PointOfSales = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'SET_CURRENT_SALES':
      return {
        ...state,
        currentSales: action.payload
      }
    default:
      return state
  }
};

export default combineReducers({
  pointOfSales: PointOfSales,
});
