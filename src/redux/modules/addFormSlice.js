import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../res/instance";

export const postWritesThunk = createAsyncThunk(
  "addForm/getAddForm",
  async (payload, thunkAPI) => {
    console.log(payload);

    // 페이로드 확인을 위해 주석처리
    try {
      const response = await instance.post("post", payload);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const AddForm = createSlice({
  name: "addForm",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postWritesThunk.pending, (state, action) => {})
      .addCase(postWritesThunk.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(postWritesThunk.rejected, (state, action) => {});
  },
});

export default AddForm;
