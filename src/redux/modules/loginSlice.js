import axios from "axios";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
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
      const data = await axios.post(`http://localhost:3001/`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const LoginSlice = createSlice({
  name: "MovieList",
  initialState,
  reducers: {},
  extraReducers: {
    [__postLogin.pending]: (state) => {},
    [__postLogin.fulfilled]: (state, action) => {
      state.users.push(action.payload);
      console.log(current(state), action);
    },
  },
});

export const {} = LoginSlice.actions;
export default LoginSlice.reducer;
