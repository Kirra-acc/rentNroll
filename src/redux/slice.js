import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsGalleryThunk } from "./operations.js";
import { toast } from "react-toastify";

export const slice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    modalIsOpen: false,
    loading: false,
    select: "",
    filters: {},
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
    changeFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsGalleryThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload];
        state.loading = false;
      })
      .addCase(fetchCarsGalleryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarsGalleryThunk.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(`Failed to browse cars catalog: ${payload}`);
      })
      // .addCase(fetchGalleryFiltersThunk.fulfilled, (state, {payload}) => {
      //   state.items = payload;
      //   state.loading = false;
      // });
  },
});

export const sliceReducer = slice.reducer;
export const {
  changeSelectFilter,
  changeModalOpen,
  changeModalClose,
  changeSelectedItemId,
  changeSelectedItem,
  addHomeItems,
  changeFilters,
} = slice.actions;
