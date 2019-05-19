import React from 'react';
import PointOfSalesActions from '../../actions/PointOfSalesActions';
import { connect } from 'react-redux';

class ProductQuantityBadge extends React.Component {
  render() {
    return null
  }
}

const mapStateToProps = (state) => {
  const { unpaidItems } = state.pointOfSalesReducer;
  return { unpaidItems };
}

const mapDispatchToProps = (dispatch) => { return new PointOfSalesActions(dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(ProductQuantityBadge);