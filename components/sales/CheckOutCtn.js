import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, Divider } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import PointOfSalesActions from '../../actions/PointOfSalesActions';
import numeral from 'numeral';

class CheckOutCtn extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Card style={styles.buttonCtnCard}>
          <Button 
            title={`Cancel`}
            TouchableComponent={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95}
            style={styles.cancelCtn}
            type="outline"
          />
          <Divider style={styles.divider} />
          <Button 
            title={`Pay ${this.totalPrice()} PHP`}
            TouchableComponent={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95} 
          />
        </Card>
      </View>
    )
  }

  totalPrice() {
    let total = 0;
    if (this.props.unpaidItems.length) {
      total = this.props.unpaidItems.map((x) => {
        return x.price * x.quantity
      }
      ).reduce((sum, n) => sum + n); 
    }
    return numeral(total).format('0,0.00');
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonCtnCard: {
    width: '100%'
  },
  divider: {
    marginTop: 8,
    marginBottom: 8
  }
});

const mapStateToProps = (state) => {
  const { unpaidItems } = state.pointOfSalesReducer
  return { unpaidItems }
};

const mapDispatchToProps = (dispatch) => { return new PointOfSalesActions(dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutCtn);
