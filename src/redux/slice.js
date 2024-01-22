import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { fetchCarsGalleryThunk } from "./operations.js";
import { toast } from "react-toastify";

export const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    modalIsOpen: false,
    loading: false,
    select: "",
    categories: [],
    selectedItemId: "",
    selectedItem: null,
    homeItems: [],
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
    changeSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    addHomeItems: (state, action) => {
      state.homeItems.push(action.payload);
      toast.success('Car was rented successfully! Please go to Home page to view your selected cars!');
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
export const {
  changeSelectFilter,
  changeModalOpen,
  changeModalClose,
  changeSelectedItemId,
  changeSelectedItem,
  addHomeItems
} = slice.actions;
