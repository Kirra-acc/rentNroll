import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65aadfa5081bd82e1d97ef2b.mockapi.io/";

export const fetchCarsGalleryThunk = createAsyncThunk(
  "fetchCars",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("cars");
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
