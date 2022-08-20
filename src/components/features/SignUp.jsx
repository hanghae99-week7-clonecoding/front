import React, { useEffect, useRef, useState } from "react";
import Btn from "../elements/Btn";
import styles from "../css_modules/SignUp.module.css";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const initialState = {
    email: "",
    userimg: "",
    channel: "",
    password: "",
    confirmPassword: "",
  };
  //HOOK
  const inputRef = useRef();
  const [idState, setIdState] = useState(false);
  const [signUp, setSignUp] = useState(initialState);
  const [idMsg, setIdMsg] = useState("아이디를 입력해 주세요.");
  const [channelMsg, setchannelMsg] = useState("채널을 입력해 주세요.");
  const [pwMsg, setPwMsg] = useState("비밀번호를 입력해 주세요.");
  const [confirmMsg, setConfirmMsg] = useState("비밀번호를 입력해 주세요.");

  // 정규식 리스트
  // 아이디 정규식 공백, 특수문자 불가
  // 비밀번호 정규식 영 + 숫 5자리 ~ 15 자리
  const idRule = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const pwRule = /^[a-zA-Z0-9]{5,12}$/;
  const channerRule = /^[ㄱ-ㅎ가-힣ㅏ-ㅣa-zA-Z0-9]{6,12}$/;

  //ID 중복 확인
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!idState) {
  //     dispatch(checkDoubleId(idMsg));
  //   }
  // }, [idMsg]);

  //이벤트 함수
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name);
    // 아이디 유효성(메일형식이 맞는지 확인하기))
    if (name === "email") {
      if (idRule.test(value) && value !== "") {
        setIdMsg("아이디는 이메일형식으로만 지정할 수 있습니다.");
      } else if (!idRule.test(value)) {
        setIdMsg("");
        setIdState(true);
      }
    }

    // 채널 유효성
    else if (name === "channel") {
      if (!channerRule.test(value)) {
        setchannelMsg("채널은 6글자 이상 12글자 이하 입니다.");
      } else if (channerRule.test(value)) {
        setchannelMsg("");
      }
    }

    // 비밀번호 유효성
    else if (name === "password") {
      if (!pwRule.test(value) && value !== "") {
        setPwMsg("비밀번호는 5자 이상 ~ 15자 이하여야 합니다.");
      } else if (value.includes(signUp.userId)) {
        setPwMsg("비밀번호에 ID를 포함 할 수 없습니다.");
      } else if (pwRule.test(value)) {
        setPwMsg("");
      }

      //2차 비밀번호 작성 후 비밀번호 작성 시 유효성 체크 로직
      if (value !== "" && signUp.confirm !== value) {
        setConfirmMsg("비밀번호가 다릅니다.");
      } else if (signUp.confirm == value) {
        setConfirmMsg("");
      }
    }
    // 비밀번호 확인 유효성
    else if (name === "confirm") {
      if (signUp.password !== "" && signUp.password !== value) {
        setConfirmMsg("비밀번호가 다릅니다.");
      } else if (signUp.password == value) {
        setConfirmMsg("");
      }
    }

    setSignUp({ ...signUp, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={styles.joinWarp}
      autoComplete="off"
    >
      <img src="./public/yt_logo.png" alt="로고" />
      <h2>회원가입</h2>

      <div className={styles.inputWarp}>
        <input
          ref={inputRef}
          onChange={onChangeHandler}
          type="text"
          placeholder="ID"
          name="userId"
          value={signUp.userid}
        />
        <span>{idMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <input
          ref={inputRef}
          onChange={onChangeHandler}
          type="text"
          placeholder="NICK NAME"
          name="nickname"
          value={signUp.nickname}
        />
        <span>{channelMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <input
          ref={inputRef}
          onChange={onChangeHandler}
          type="password"
          placeholder="PASSWORD"
          name="password"
          value={signUp.password}
        />
        <span>{pwMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <input
          ref={inputRef}
          onChange={onChangeHandler}
          type="password"
          placeholder="PW CHECK"
          name="confirm"
          value={signUp.confirm}
        />
        <span>{confirmMsg}</span>
      </div>
      <Btn height="30px" color="black" backgroundColor="blue">
        JOIN
      </Btn>
    </form>
  );
};
export default SignUp;
