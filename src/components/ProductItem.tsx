import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate?: number;
    count?: number;
  };
}

interface ProductItemProps {
  product: Product;
  onPress: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onPress }) => {
  const handlePress = () => {
    if (!product.id || !product.title || !product.price || !product.description || !product.category || !product.image || !product.rating?.count) {
      Alert.alert('Error', 'Product data is incomplete or incorrect');
      return;
    }
    onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.rating}>Rating: {product.rating?.rate?.toFixed(1) ?? 'N/A'} ({product.rating?.count} reviews)</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  category: {
    fontSize: 14,
    color: 'blue',
  },
  rating: {
    fontSize: 14,
    color: 'orange',
  },
});

export default ProductItem;