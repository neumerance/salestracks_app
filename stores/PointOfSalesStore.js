import React from 'react';
import { createStore } from 'redux';
import PointOfSalesReducer from './reducers/PointOfSalesReducer';

export default createStore(PointOfSalesReducer);