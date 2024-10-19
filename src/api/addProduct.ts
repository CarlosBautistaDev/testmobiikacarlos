import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate?: number;
    count: number;
  };
}

const API_URL = 'https://fakestoreapi.com/products';

export const addProductToAPI = async (product: Omit<Product, 'id'>) => {
  try {
    const response = await axios.post(API_URL, product);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};