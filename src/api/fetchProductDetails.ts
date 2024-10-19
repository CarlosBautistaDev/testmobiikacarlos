import axios from 'axios';
import { Product } from './addProduct';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProductDetails = async (id: number): Promise<Product> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};