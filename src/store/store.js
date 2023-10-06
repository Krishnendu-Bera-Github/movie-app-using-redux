import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import searchReducer from "../features/searchSlice";
import detailsReducer from "../features/detailsSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    search: searchReducer,
    details: detailsReducer,
  },
});
