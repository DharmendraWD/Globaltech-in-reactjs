import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

export const fetchTeams = createAsyncThunk(
  "products/fetchTeams",
  async () => {
    const response = await fetch(
      "https://codewithbikesh.arrive4you.com/api/ourteams"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  }
);

const teamSlice = createSlice({
  name: "product",
  initialState: {
    products: [], // Ensure products is always an array
    status: STATUSES.IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = STATUSES.SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = STATUSES.FAILED;
        state.error = action.error.message;
      });
  },
});

export const { setTeams, setStatus } = teamSlice.actions;
export default teamSlice.reducer;
