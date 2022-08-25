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
export const goodDetail = createAsyncThunk(
  "detailSlice/goodDetail",
  async (payload, thunkAPI) => {
    try {
      const responseData = await instance.post(`like/${payload}`);
      payload.useEffect(() => {}, []);
      return responseData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 구독
export const getSubscribe = createAsyncThunk(
  "dd/getDd",
  async (payload, thunkAPI) => {
    try {
      const responseData = await instance.post(`subscribe/${payload}`);
      console.log(responseData.data)
      return responseData.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 글 삭제
export const getDeleteForm = createAsyncThunk(
  "deleteData/getdeleteData",
  async (payload, thunkAPI) => {
    try {
      const responseData = await instance.delete(`post/${payload}`);
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
    [goodDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [goodDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [goodDetail.rejected]: (state) => {
      state.isLoading = false;
    },
    [getDeleteForm.pending]: (state) => {
      state.isLoading = true;
    },
    [getDeleteForm.fulfilled]: (state, action) => {
      state.result = action.payload;
    },
    [getSubscribe.pending]: (state) => {
      state.isLoading = true;
    },
    [getSubscribe.fulfilled]: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;
