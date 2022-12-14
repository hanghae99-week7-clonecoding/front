import React, { useState } from "react";
import styles from "../css_modules/Login.module.css";
import { __postLogin } from "../../redux/modules/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

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
    dispatch(__postLogin({ login, navigation }));
    Setlogin({
      email: "",
      password: "",
    });
  };
  return (
    <div className={styles.LoginBox}>
      <form onSubmit={onSubmitHandler} className={styles.LoginInput}>
        <div className={styles.LoginLogoBox}>
          <img
            style={{ width: "150px", height: "80px" }}
            src="/img/logo2.png"
            alt="유튜브사진"
          ></img>
          <p className={styles.fristName}>Sign in</p>
          <p>Use your Google Account</p>
        </div>
        <input
          name="email"
          onChange={onChangeHandler}
          placeholder="이메일"
          value={login.email}
        ></input>
        <input
          name="password"
          type="password"
          onChange={onChangeHandler}
          placeholder="비밀번호"
          value={login.password}
          autoComplete="off"
        ></input>
        <div className={styles.signBox}>
          <div
            onClick={() => {
              navigation("/sign");
            }}
          >
            Create account
          </div>
          <button>로그인!</button>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default Login;
