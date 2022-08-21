import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  lists: [],
  isLoading: false,
  error: null,
};

export const __getMovie = createAsyncThunk(
  "lists/getMovie",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://localhost:3001/lists/?page=${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getTitle = createAsyncThunk(
  "lists/getTitle",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.post(`http://localhost:3001/`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMovie.fulfilled]: (state, action) => {
      console.log(action.payload);
      // state.lists.push(action.payload);
      state.lists = [...state.lists].concat(action.payload);
      state.isLoading = false;
    },
    [__getMovie.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getTitle.pending]: (state) => {},
    [__getTitle.fulfilled]: (state, action) => {},
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
