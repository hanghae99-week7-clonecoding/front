import React, { useEffect, useRef, useState } from "react";
import Btn from "../elements/Btn";
import styles from "../css_modules/SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/modules/signUpSlice";
import { checkDoubleId } from "../../redux/modules/signUpSlice";
//기본 이미지 import
import base_img from "../../res/img/base_profile.jpeg";
import yt_logo from "../../res/img/yt_logo.png";

const SignUp = () => {
  const initialState = {
    email: "",
    channel: "",
    password: "",
    confirmPassword: "",
  };
  //HOOK
  const inputRef = useRef();
  const checkIdResult = useSelector((state) => state.sign.result);

  //state
  const [checkId, setCheckId] = useState(false);
  const [signUp, setSignUp] = useState(initialState);
  const [emailData, setEmailData] = useState("");
  const [channelData, setChannelData] = useState("");
  const [passData, setPassData] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [imgFile, setImgFile] = useState([]);

  //유효성 확인 메세지
  const [idMsg, setIdMsg] = useState("");
  const [channelMsg, setchannelMsg] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");

  // 정규식 리스트
  // 아이디는 이메일 확인
  // 비밀번호 정규식 영 + 숫 6자리 ~ 20 자리
  // 채널명 특수문자 제외, 한글 가능 2~15자리
  const idRule = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{3}$/;
  const pwRule = /^[a-zA-Z0-9]{6,20}$/;
  const channerRule = /^[ㄱ-ㅎ가-힣ㅏ-ㅣa-zA-Z0-9]{2,15}$/;

  //ID 중복 확인
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkId) {
      dispatch(checkDoubleId({ email: emailData, setIdMsg }));
    }
  }, [checkId]);

  //----이벤트 함수----

  // 입력값 바뀔때 유효성 검사 하는 체인지핸들러
  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    // 아이디 유효성(메일형식이 맞는지 확인하기))
    if (name === "email") {
      if (idRule.test(value) && value !== "") {
        setEmailData(value);
        setCheckId(true);
        // setIdMsg(checkIdResult ? "사용가능한 ID입니다." : "중복된 ID 입니다.");
      } else if (!idRule.test(value)) {
        setIdMsg("아이디는 이메일형식으로만 지정할 수 있습니다.");
      }
    }

    // 채널 유효성
    else if (name === "channel") {
      if (!channerRule.test(value)) {
        setchannelMsg(
          "채녈명은 특수문자를 포함할 수 없으며, 3~15글자로 입력할 수 있습니다."
        );
      } else if (channerRule.test(value)) {
        setchannelMsg("사용가능한 채널명입니다.");
        setChannelData(value);
      }
    }

    // 비밀번호 유효성
    else if (name === "password") {
      if (!pwRule.test(value) && value !== "") {
        setPwMsg("비밀번호는 6자 이상 ~ 20자 이하여야 합니다.");
      } else if (pwRule.test(value)) {
        setPwMsg("사용가능한 비밀번호 입니다.");
        setPassData(value);
      }

      //2차 비밀번호 작성 후 비밀번호 작성 시 유효성 체크 로직
      if (value !== "" && signUp.confirm !== value) {
        setConfirmMsg("비밀번호가 다릅니다.");
      } else if (signUp.confirm === value) {
        setConfirmMsg("확인 되었습니다 :)");
        setConfirmPass(value);
      }
    }
    // 비밀번호 확인 유효성
    else if (name === "confirmPassword") {
      if (signUp.password !== "" && signUp.password !== value) {
        setConfirmMsg("비밀번호가 다릅니다.");
      } else if (signUp.password == value) {
        setConfirmMsg("확인 되었습니다 :)");
        setCheckId(false);
      }
    }
    setSignUp({ ...signUp, [name]: value });
  };

  //이미지 파일 체인지 핸들러
  const onLoadImg = (event) => {
    //현재 이미지 파일
    const imaData = event.target.files[0];
    //선택한 이미지 파일의 url
    const imageUrl = URL.createObjectURL(imaData);
    setImgFile(imageUrl);
  };
  //등록하기
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("email", emailData);
    formdata.append("channel", channelData);
    formdata.append("password", passData);
    formdata.append("confirmPassword", confirmPass);
    formdata.append("file", imgFile); //이미지
    dispatch(addUser(formdata));
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={styles.joinWarp}
      autoComplete="off"
      encType="multipart/form-data"
    >
      <img className={styles.yt_logo} src={yt_logo} alt="로고" />
      <h2>회원가입</h2>

      <div className={styles.inputWarp}>
        <div className={styles.title}>이메일(ID)*</div>
        <input
          ref={inputRef}
          onChange={onChangeHandler}
          type="mail"
          id="email"
          placeholder="사용하실 아이디를 이메일 형식으로 입력해주세요."
          name="email"
          required
        />
        <span>{idMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <div className={styles.title}>프로필</div>
        <div className={styles.profile}>
          {!imgFile[0] ? (
            <img src={base_img} alt="이미지 미리보기" />
          ) : (
            <img src={imgFile} alt="이미지 미리보기" />
          )}
          <label htmlFor="userimg">사진 업로드</label>
        </div>
        <input
          onChange={onLoadImg}
          type="file"
          accept="image/*"
          placeholder="프로필 이미지 등록하기"
          name="userimg"
          id="userimg"
        />
      </div>

      <div className={styles.inputWarp}>
        <div className={styles.title}>채널명*</div>
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="채녈명을 입력해주세요"
          name="channel"
          id="channel"
          minLength="3"
          maxLength="15"
          required
        />
        <span>{channelMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <div className={styles.title}>비밀번호 입력*</div>
        <input
          onChange={onChangeHandler}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          id="password"
          minLength="6"
          maxLength="20"
          required
        />
        <span>{pwMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <div className={styles.title}>비밀번호 확인*</div>
        <input
          onChange={onChangeHandler}
          type="password"
          placeholder="확인을 위해 비밀번호를 다시한번 입력해주세요."
          name="confirmPassword"
          minLength="6"
          maxLength="20"
          required
        />
        <span>{confirmMsg}</span>
      </div>
      <Btn height="30px" color="#fff" backgroundColor="#28B4B4">
        회원가입 하기
      </Btn>
    </form>
  );
};
export default SignUp;
