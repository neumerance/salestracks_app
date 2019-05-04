import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome Screen</Text>
        <Button
          title="Point of Sales"
          onPress={() => navigate('PointOfSales', {})}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
