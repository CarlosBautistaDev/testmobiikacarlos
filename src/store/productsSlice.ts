import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../api/addProduct';

interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      state.status = 'succeeded';
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.status = action.payload ? 'loading' : 'idle';
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.status = 'failed';
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, setLoading, setError, addProduct } = productsSlice.actions;

export default productsSlice.reducer;