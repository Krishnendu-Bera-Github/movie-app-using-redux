import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../utils/api";

export const getDetails = createAsyncThunk("details/getDetails", async (url) => {
  const response = await fetchDataFromApi(url);
  return response;
});

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(getDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Error occured";
    });
  },
});

export default detailsSlice.reducer;
