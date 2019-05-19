import { bindActionCreators } from 'redux';

export default class PointOfSalesActions {
  constructor(dispatch) {
    const self = this;
    return bindActionCreators({
      fetchProducts: self.fetchProducts,
      setUnpaidItems: self.setUnpaidItems
    }, dispatch);
  }

  fetchProducts() {
  }

  setUnpaidItems(unpaidItems = []) {
    return {
      type: 'SET_UNPAID_ITEMS',
      payload: unpaidItems
    }
  }
}