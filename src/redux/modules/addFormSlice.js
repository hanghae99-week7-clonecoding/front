import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../res/instance";

export const postWritesThunk = createAsyncThunk(
  "addForm/getAddForm",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post("post", payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postEditThunk = createAsyncThunk(
  "editForm/getEditForm",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post("post", payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const AddForm = createSlice({
  name: "postReducer",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postWritesThunk.pending, (state, action) => {})
      .addCase(postWritesThunk.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(postWritesThunk.rejected, (state, action) => {})
      
      .addCase(postEditThunk.pending, (state, action) => {})
      .addCase(postEditThunk.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(postEditThunk.rejected, (state, action) => {});
  },
});

export default AddForm;
