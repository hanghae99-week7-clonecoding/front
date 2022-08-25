import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../res/instance";

//등록하기 초기화
const initialState = {
  result: "",
  comment: "",
};

export const sendComment = createAsyncThunk(
  "commentSlice/sendComment",
  async (payload, thunkAPI) => {
    try {
      const responseData = await instance.post(`comment/${payload.postId}`, {
        comment: payload.comment,
      });
      if (responseData.data.ok) {
        payload.setReultCheck(true);
      }
    } catch (error) {
      if (error.response.data.ok == false) {
        payload.setReultCheck(false);
      }
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
