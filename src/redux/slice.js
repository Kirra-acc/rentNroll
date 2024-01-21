import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { fetchCarsGalleryThunk } from "./operations.js";

export const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    loading: false,
    select: '',
    categories: [],
  },

  reducers: {
    changeSelectFilter: (state, { payload }) => {
      state.select = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarsGalleryThunk.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    });
  },
});

export default slice.reducer;
export const { changeSelectFilter } = slice.actions;
