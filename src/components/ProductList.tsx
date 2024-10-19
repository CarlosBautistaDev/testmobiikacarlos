import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface ProductListProps {
  products: Product[];
  onPressItem: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onPressItem }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductItem
          product={item}
          onPress={() => onPressItem(item.id)}
        />
      )}
    />
  );
};

export default ProductList;