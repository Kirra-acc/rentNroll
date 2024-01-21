import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { fetchCarsGalleryThunk } from "./operations.js";

export const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    modalIsOpen: false,
    loading: false,
    select: "",
    categories: [],
    selectedItemId: "",
  },

  reducers: {
    changeSelectFilter: (state, { payload }) => {
      state.select = payload;
    },
    changeModalOpen: (state, { payload }) => {
      state.modalIsOpen = payload;
    },
    changeModalClose: (state, { payload }) => {
      state.modalIsOpen = payload;
    },
    changeSelectedItemId: (state, { payload }) => {
      state.selectedItemId = payload;
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
export const { changeSelectFilter, changeModalOpen, changeModalClose, changeSelectedItemId } =
  slice.actions;
