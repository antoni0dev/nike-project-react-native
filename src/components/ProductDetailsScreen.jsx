import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import products from '../data/products';

const ProductDetailsScreen = () => {
  const product = products[0];

  const { width } = useWindowDimensions();

  return (
    <View>
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        paddingEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
