import { bindActionCreators } from 'redux';

export default class PointOfSalesActions {
  constructor(dispatch) {
    const self = this;
    return bindActionCreators({
      fetchProducts: self.fetchProducts
    }, dispatch);
  }

  fetchProducts() {
  }
}