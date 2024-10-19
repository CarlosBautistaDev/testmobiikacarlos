import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from './addProduct';

const API_URL = 'https://fakestoreapi.com/products?limit=5';

export const fetchProducts = async (sort?: string): Promise<Product[]> => {
  const url = sort ? `${API_URL}&sort=${sort}` : API_URL;
  const response = await axios.get(url);
  const products = response.data;

  await AsyncStorage.setItem('products', JSON.stringify(products));

  return products;
};