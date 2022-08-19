import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import AddFormPage from "../pages/AddFormPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign" element={<SignUpPage />}></Route>
        <Route path="/addFrom" element={<AddFormPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
