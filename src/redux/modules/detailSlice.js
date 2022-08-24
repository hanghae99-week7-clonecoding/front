import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../res/instance";

const initialState = {
  result: [],
};

export const getDetailData = createAsyncThunk(
  "detailSlice/getDetailData",
  async (payload, thunkAPI) => {
    try {
      const responseData = await instance.get(`post/${payload}`);
      return responseData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailData.pending]: (state) => {
      state.isLoading = true;
    },
    [getDetailData.fulfilled]: (state, action) => {
      state.result = action.payload.result;
      state.isLoading = false;
    },
    [getDetailData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;
