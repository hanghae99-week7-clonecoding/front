import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../modules/signUpSlice";
import commentSlice from "../modules/commentSlice";
import detailSlice from "../modules/detailSlice";
import addFormSlice from "../modules/addFormSlice";
import mainSlice from "../modules/mainSlice";
import loginSlice from "../modules/loginSlice";

const store = configureStore({
  reducer: {
    sign: signUpSlice,
    comment: commentSlice,
    // detail: detailSlice,
    // addForm: addFormSlice,
    main: mainSlice,
    // login: loginSlice,
  },
  // 배포 환경일때, devTools가 false가 됩니다.
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
