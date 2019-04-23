import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class PointOfSales extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Point of Sales</Text>
        <Button
          title="Back to MainScreen"
          onPress={() => navigate('MainScreen', {})}
        />
      </View>
    );
  }
}

export default PointOfSales;
