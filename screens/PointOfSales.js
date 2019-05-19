import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductTiles from '../components/sales/ProductTiles'
import { Col, Row, Grid } from "react-native-easy-grid";
import CheckOutCtn from '../components/sales/CheckOutCtn';
import { connect } from 'react-redux';

class PointOfSales extends Component {
  render() {
    return (
      <Grid style={styles.screen}>
        <Row size={75}>
          <ProductTiles />
        </Row>
        <Row size={25}>
          <CheckOutCtn />
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#E9EDF1'
  }
});

export default PointOfSales;
