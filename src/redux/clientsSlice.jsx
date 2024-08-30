import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

export const fetchClients = createAsyncThunk("clients/fetchClients", async () => {
  const response = await fetch(
    "https://codewithbikesh.arrive4you.com/api/clients"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
});

const clientsSlice = createSlice({
  name: "product",
  initialState: {
    products: [], // Ensure products is always an array
    status: STATUSES.IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = STATUSES.SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.status = STATUSES.FAILED;
        state.error = action.error.message;
      });
  },
});

export const { setTeams, setStatus } = clientsSlice.actions;
export default clientsSlice.reducer;
