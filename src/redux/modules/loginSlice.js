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
    try {
      const data = await instance.post(`/user/login`, payload.login);
      const token = data.data.token;
      setCookie("jwtToken", `${token}`);
      //로컬스토리지에 채널명 저장
      window.localStorage.setItem(
        "userChannel",
        JSON.stringify(data.data.channel)
      );
      if (data.data.result) {
        alert("로그인 성공합니다");
        payload.navigation("/");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
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
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
  },
});

export const {} = LoginSlice.actions;
export default LoginSlice.reducer;
