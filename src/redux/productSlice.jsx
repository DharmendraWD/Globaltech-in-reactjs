
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const STATUSES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed'
};

export const fetchproducts = createAsyncThunk(
  'products/fetchproducts',
  async () => {
    const response = await fetch(
      "https://codewithbikesh.arrive4you.com/api/products"
    );
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [], // Ensure products is always an array
    status: STATUSES.IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchproducts.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchproducts.fulfilled, (state, action) => {
        state.status = STATUSES.SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(fetchproducts.rejected, (state, action) => {
        state.status = STATUSES.FAILED;
        state.error = action.error.message;
      });
  },
});

export const { setproducts, setStatus } = productSlice.actions;
export default productSlice.reducer;