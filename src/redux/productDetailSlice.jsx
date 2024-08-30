// src/redux/productDetailSlice.jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

export const fetchproductsDetails = createAsyncThunk(
  "productDetails/fetchproductsDetails",
  async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    return response.json();
  }
);

const productDetailSlice = createSlice({
  name: "productDetails",
  initialState: {
    data: {},
    status: STATUSES.IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchproductsDetails.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchproductsDetails.fulfilled, (state, action) => {
        state.status = STATUSES.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchproductsDetails.rejected, (state, action) => {
        state.status = STATUSES.FAILED;
        state.error = action.error.message;
      });
  },
});

export const { reducer: productDetailReducer } = productDetailSlice;
