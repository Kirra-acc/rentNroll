import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsGalleryThunk } from "./operations.js";

const initialState = {
  carItems: {
    items: [],
    loading: false,
  },
};

export const slice = createSlice({
  name: "cars",
  initialState,
  //   reducers: {
  //     setFilter: (state, { payload }) => {
  //       state.filter = payload;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(fetchCarsGalleryThunk.fulfilled, (state, { payload }) => {
      state.carItems.items = payload;
      state.carItems.loading = false;
    });
  },
});

export default slice.reducer;
