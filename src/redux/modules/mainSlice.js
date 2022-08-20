import axios from "axios";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  lists: [],

  isLoading: false,
  error: null,
};

export const __getMovie = createAsyncThunk(
  "lists/getMovie",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.get(`http://localhost:3001/`);
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

export const MovieSlice = createSlice({
  name: "MovieList",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMovie.pending]: (state) => {},
    [__getMovie.fulfilled]: (state, action) => {
      state.lists.push(action.payload);
      console.log(current(state), action);
    },
    [__getTitle.pending]: (state) => {},
    [__getTitle.fulfilled]: (state, action) => {
      state.lists.push(action.payload);
      console.log(current(state), action);
    },
  },
});

export const {} = MovieSlice.actions;
export default MovieSlice.reducer;
