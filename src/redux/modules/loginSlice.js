import axios from "axios";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import instance from "../../res/instance";
import { setCookie } from "../../res/cookie";
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const __postLogin = createAsyncThunk(
  "users/postLogin",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post(`/user/login`, payload);
      const token = data.data.token;
      console.log(token);
      setCookie("jwtToken", `${token}`);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const LoginSlice = createSlice({
  name: "userlogin",
  initialState,
  reducers: {},
  extraReducers: {
    [__postLogin.pending]: (state) => {},
    [__postLogin.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const {} = LoginSlice.actions;
export default LoginSlice.reducer;
