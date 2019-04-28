import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class MainScreen extends Component {
  static navigationOptions = {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Main Screen</Text>
        <Button
          title="Point of Sales"
          onPress={() => navigate('PointOfSales', {})}
        />
      </View>
    );
  }
}

export default MainScreen;
