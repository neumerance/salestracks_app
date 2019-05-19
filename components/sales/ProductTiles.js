import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import PointOfSalesActions from '../../actions/PointOfSalesActions';
import { connect } from 'react-redux';

class ProductTiles extends React.Component {
  componentWillReceiveProps(props) {
    console.log('props', props);
  }

  render() {
    console.log('props', this.props);
    return(
      <ScrollView>
        {this.renderProducts()}
      </ScrollView>
    )
  }

  renderProducts() {
    const self = this;
    const unpaidItems = this.props.unpaidItems;
    let unpaidItem = null;
    let listItemProps = {
      Component: TouchableScale,
      friction: 90,
      tension: 100,
      activeScale: 0.95,
      bottomDivider: true
    }
    return self.props.products.map((p, i) => {
      unpaidItem = unpaidItems.find(x => x.slug === p.slug);
      let quantity = 0;
      if (unpaidItem) {
        listItemProps.badge = {
          value: unpaidItem.quantity
        }
        quantity = unpaidItem.quantity;
      }
      listItemProps.key = `product_list_${i}_${quantity}`;
      listItemProps.leftAvatar = { source: { uri: p.image } };
      listItemProps.title = p.name;
      listItemProps.subtitle = p.description;
      listItemProps.onPress = () => { self.addUnpaidItem(p.slug) };
      return(
        <ListItem {...listItemProps} />
      )
    })
  }

  addUnpaidItem(product_slug) {
    const unpaidItems = this.props.unpaidItems;
    const slugFilter = x => x.slug === product_slug;
    unpaidItem = unpaidItems.find(slugFilter);
    unpaidItemKey = unpaidItems.findIndex(slugFilter);
    if (unpaidItem) {
      unpaidItem.quantity = unpaidItem.quantity + 1;
      unpaidItems[unpaidItemKey] = unpaidItem;
    } else {
      unpaidItem = {
        slug: product_slug,
        quantity: 1
      }
      unpaidItems.push(unpaidItem);
    }
    this.props.setUnpaidItems(unpaidItems);
  }
}

const mapStateToProps = (state) => {
  const { products, unpaidItems } = state.pointOfSalesReducer
  return { products, unpaidItems }
};

const mapDispatchToProps = (dispatch) => { return new PointOfSalesActions(dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(ProductTiles);
