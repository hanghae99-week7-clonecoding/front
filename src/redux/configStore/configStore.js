import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../modules/signUpSlice";
import detailSlice from "../modules/detailSlice";
import addFormSlice from "../modules/addFormSlice";
import mainSlice from "../modules/mainSlice";
import loginSlice from "../modules/loginSlice";

const store = configureStore({
  reducer: {
    // sign: signUpSlice.reducer,
    // detail: detailSlice.reducer,
    // addForm: addFormSlice.reducer,
    main: mainSlice,
    // login: loginSlice.reducer,
  },
  // 배포 환경일때, devTools가 false가 됩니다.
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
