import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../res/instance";
// import axios from "axios";

const initialState = {
  result: "",
};

export const sendComment = createAsyncThunk(
  "commentSlice/sendComment",
  async (payload, thunkAPI) => {
    try {
      const responseData = await instance.post(
        `comment/${payload.postId}`,
        payload.comment
      );
      return responseData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [sendComment.pending]: (state) => {
      state.isLoading = true;
    },
    [sendComment.fulfilled]: (state, action) => {
      state.result = action.payload;
      state.isLoading = false;
    },
    [sendComment.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
