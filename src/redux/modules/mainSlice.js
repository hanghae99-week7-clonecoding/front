import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../res/instance";
const initialState = {
  lists: [],
  isLoading: false,
  error: null,
};

export const __getMovie = createAsyncThunk(
  "lists/getMovie",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`post/scroll/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getCategory = createAsyncThunk(
  "lists/Category",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`post/search/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getTitle = createAsyncThunk(
  "lists/getTitle",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`post/searchkey/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
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
      state.lists = [...state.lists].concat(action.payload.pageData);
      state.isLoading = false;
    },
    [__getCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCategory.fulfilled]: (state, action) => {
      state.lists = action.payload.result;
      state.isLoading = false;
    },
    [__getMovie.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getTitle.pending]: (state) => {},
    [__getTitle.fulfilled]: (state, action) => {
      state.lists = action.payload.result;
    },
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
