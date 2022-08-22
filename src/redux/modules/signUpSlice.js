import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../res/instance";
// import axios from "axios";

const initialState = {
  result: "",
};

export const addUser = createAsyncThunk(
  "signUpSlice/addUser",
  async (payload, thunkAPI) => {
    try {
      const responseData = await instance.post("user/signup", payload);
      console.log(responseData.data);
      return responseData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [addUser.pending]: (state) => {
      state.isLoading = true;
    },
    [addUser.fulfilled]: (state, action) => {
      state.result = action.payload;
      state.isLoading = false;
    },
    [addUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = signUpSlice.actions;
export default signUpSlice.reducer;
