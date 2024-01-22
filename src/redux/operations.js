import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65aadfa5081bd82e1d97ef2b.mockapi.io/";

export const fetchCarsGalleryThunk = createAsyncThunk(
  "fetchCars",
  async (page, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        page,
        limit: 12,
      });
      const { data } = await axios.get(`cars?${params}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
