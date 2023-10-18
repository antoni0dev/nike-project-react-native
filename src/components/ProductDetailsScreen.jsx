import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import products from '../data/products';

const ProductDetailsScreen = () => {
  const product = products[0];

  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn('Add to cart!');
  };

  return (
    <View>
      <ScrollView>
        {/* List of Images */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          paddingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 2,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#111',
    borderRadius: 10,
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#f1f1f1',
    fontSize: 17,
    fontWeight: '500',
    padding: 8,
  },
});

export default ProductDetailsScreen;
