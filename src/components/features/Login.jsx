import React, { useState } from "react";
import styles from "../css_modules/Login.module.css";
import { __postLogin } from "../../redux/modules/loginSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  // const dispatch = useDispatch();
  const [login, Setlogin] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setlogin({ ...login, [name]: value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (login.email.trim() === "" || login.password.trim() === "") {
      return alert("모든 항목을 입력해주세요.");
    }
  };
  return (
    <div className={styles.LoginBox}>
      <form onSubmit={onSubmitHandler} className={styles.LoginInput}>
        <input
          name="email"
          onChange={onChangeHandler}
          placeholder="이메일"
        ></input>
        <input
          name="password"
          type="password"
          onChange={onChangeHandler}
          placeholder="비밀번호"
        ></input>
        <button>로그인!</button>
      </form>
      <div></div>
    </div>
  );
};

export default Login;
