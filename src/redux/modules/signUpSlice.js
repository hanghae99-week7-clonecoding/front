import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../res/instance";
// import axios from "axios";

const initialState = {
  result: "",
  message: "",
};

export const addUser = createAsyncThunk(
  "signUpSlice/addUser",
  async (payload, thunkAPI) => {
    try {
      const responseData = await instance.post("user/signup", payload);
      return responseData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const checkDoubleId = createAsyncThunk(
  "signUpSlice/checkDoubleId",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const responseData = await instance.post("user/check_Id", {
        email: payload.email,
      });
      console.log(responseData.data.data.result);
      if (responseData.data.data.result) {
        return payload.setIdMsg("사용가능한 아이디 입니다.");
      } else {
        return payload.setIdMsg("중복된 아이디 입니다.");
      }
      // return responseData.data;
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
    [checkDoubleId.pending]: (state) => {
      state.isLoading = true;
    },
    [checkDoubleId.fulfilled]: (state, action) => {
      state.result = action.payload.result;
      state.message = action.payload.setIdMsg;
      state.isLoading = false;
    },
    [checkDoubleId.rejected]: (state, action) => {
      state.isLoading = false;
      state.result = action.payload.response.data.result;
      state.message = action.payload.response.data.message;
    },
  },
});

export const {} = signUpSlice.actions;
export default signUpSlice.reducer;
