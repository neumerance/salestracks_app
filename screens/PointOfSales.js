import React, { Component } from 'react';
import ProductTiles from '../components/sales/ProductTiles'
import { connect } from 'react-redux';
import PointOfSalesActions from '../actions/PointOfSalesActions';

class PointOfSales extends Component {
  render() {
    return (
      <ProductTiles />
    );
  }
}

const mapStateToProps = (state) => {
  const { products } = state
  return { products }
};

const mapDispatchToProps = (dispatch) => { return new PointOfSalesActions(dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(PointOfSales);
