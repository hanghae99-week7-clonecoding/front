import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../res/instance";

//초기화
const initialState = {
  result: [],
};

export const getComment = createAsyncThunk(
  "commentListSlice/getComment",
  async (payload, thunkAPI) => {
    try {
      const responseData = await instance.get(`comment/${payload.postId}`);
      return responseData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentListSlice = createSlice({
  name: "commentListSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getComment.pending]: (state) => {
      state.isLoading = true;
    },
    [getComment.fulfilled]: (state, { payload }) => {
      state.result = payload.data;
      state.isLoading = false;
    },
    [getComment.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = commentListSlice.actions;
export default commentListSlice.reducer;
