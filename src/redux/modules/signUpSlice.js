import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../res/instance";

const initialState = {
  result: "",
  message: "",
};

export const addUser = createAsyncThunk(
  "signUpSlice/addUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const responseData = await instance.post("user/signup", payload.formdata);
      if (responseData.data.result) {
        alert("회원이 되신걸 축하드립니다!");
        payload.navigation("/login");
      }
      return responseData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const checkDoubleId = createAsyncThunk(
  "signUpSlice/checkDoubleId",
  async (payload, thunkAPI) => {
    try {
      const responseData = await instance.post("user/check_Id", {
        email: payload.email,
      });
      if (responseData.data.result) {
        payload.setIdMsg("사용가능한 아이디 입니다.");
      }
      return thunkAPI.fulfillWithValue(responseData.data);
    } catch (error) {
      if (error.response.data.result == false) {
        payload.setIdMsg("중복된 아이디입니다");
      }
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
      state.isLoading = false;
    },
    [checkDoubleId.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = signUpSlice.actions;
export default signUpSlice.reducer;
