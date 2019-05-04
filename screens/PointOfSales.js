import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'


const products = [
  {
    name: 'Roasted chicken',
    description: '',
    slug: 'roasted-chicken',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Pork belly',
    description: '',
    slug: 'pork-belly',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Chilly sauce',
    description: '',
    slug: 'chilly-sauce',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Chilly sauce',
    description: '',
    slug: 'chilly-sauce',
    image: 'https://via.placeholder.com/150'
  }
]

class PointOfSales extends Component {
  render() {
    return (
      <ScrollView style={styles.container} alwaysBounceVertical>
        { this.renderProductCards() }
      </ScrollView>
    );
  }

  renderProductCards() {
    return products.map((product, idx) => {
      return(
        <Card key={`product-card-${idx}`} style={styles.product_card}>
          <Image
            source={{ uri: product.image }}
            style={styles.product_images}
          />
          <Text>{product.name}</Text>
        </Card>
      )
    });
  }
}

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%'
  },
  product_card: {
    justifyContent: 'center',
    width: '50%'
  },
  product_images: {
    width: 70,
    height: 70
  }
})

export default PointOfSales;
