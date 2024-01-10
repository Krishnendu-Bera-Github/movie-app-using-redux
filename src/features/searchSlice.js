import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../utils/api";

export const getSearch = createAsyncThunk("search/getSearch", async (url) => {
  const response = await fetchDataFromApi(url);
  return response;
});

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSearch.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(getSearch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Error occured";
    });
  },
});

export default searchSlice.reducer;
