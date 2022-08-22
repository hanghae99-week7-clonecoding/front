// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const postWritesThunk = createAsyncThunk(
//   "addForm",
//   async (ddd, thunkAPI) => {
//     try {
//       const response = await axios.post('http://15.164.221.168:8000/');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );


// export const AddForm = createSlice({
//     name: "????",
//     initialState: {},
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(postWritesThunk.pending, (state, action) => {})
//         .addCase(postWritesThunk.fulfilled, (state, action) => {
//           state.data?.push(action.payload);
//         })
//         .addCase(postWritesThunk.rejected, (state, action) => {});
//     },
//   });
  

// export default AddForm;