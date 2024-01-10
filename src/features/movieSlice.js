import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../utils/api";

export const getTrending = createAsyncThunk(
  "movies/getTrending",
  async (url) => {
    const response = await fetchDataFromApi(url);
    return response;
  }
);

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTrending.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getTrending.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(getTrending.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Error occured";
    });
  },
});

export default movieSlice.reducer;
