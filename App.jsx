import { StyleSheet, View } from 'react-native';
import ProductScreen from './src/components/ProductScreen';
import ProductDetailsScreen from './src/components/ProductDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      <ProductDetailsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
