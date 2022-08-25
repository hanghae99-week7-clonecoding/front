import React, { useEffect, useState } from "react";
import styles from "../css_modules/Header.module.css";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { __getTitle } from "../../redux/modules/mainSlice";
import { getCookie, removeCookie } from "../../res/cookie";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menu, Setmenu] = useState(false);
  const [visible, Setvisible] = useState(false);
  const token = getCookie("jwtToken");
  const userImg = getCookie("userImg");
  const [loginState, setLoginState] = useState(false);
  const [search, Setsearch] = useState({
    keyword: "",
  });

  const logoutHandler = () => {
    removeCookie("jwtToken");
    removeCookie("userImg");
    removeCookie("userChannel");
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setsearch({ ...search, [name]: value });
  };
  const onSearchHandler = (event) => {
    event.preventDefault();
    dispatch(__getTitle(search.keyword));
    Setsearch({
      keyword: "",
    });
  };
  useEffect(() => {
    token ? setLoginState(true) : setLoginState(false);
  }, [token]);
  return (
    <div>
      <div className={styles.HeaderBox}>
        <div className={styles.HeaderLogo}>
          <div
            className={styles.HeaderHamburger}
            onClick={() => {
              Setmenu((prev) => !prev);
              Setvisible((prev) => !prev);
            }}
          >
            <FontAwesomeIcon
              className={styles.hamburger}
              icon={faBars}
            ></FontAwesomeIcon>
          </div>
          <div className={styles.logo} onClick={() => navigate("/")}>
            <img
              className={styles.logoimg}
              src="/img/logo2.png"
              alt="유튜브사진"
            ></img>
          </div>
        </div>
        <form onSubmit={onSearchHandler} className={styles.HeaderForm}>
          <input
            name="keyword"
            onChange={onChangeHandler}
            placeholder="검색"
            className={styles.HeaderInput}
            value={search.keyword}
          ></input>

          <button>
            <FontAwesomeIcon
              style={{ height: "15px" }}
              icon={faMagnifyingGlass}
            ></FontAwesomeIcon>
          </button>
        </form>
        <div className={styles.HeaderSerch}>
          {loginState ? (
            <div>
              <FontAwesomeIcon
                onClick={() => {
                  navigate("/addform", { state: { add: "add" } });
                }}
                icon={faCamera}
              ></FontAwesomeIcon>
            </div>
          ) : null}

          {token ? (
            <div className={styles.profile}>
              <img src={userImg} alt="사진" className={styles.userImg} />
              <div
                className={styles.logIn}
                onClick={() => {
                  logoutHandler();
                  navigate("/");
                }}
              >
                로그아웃
              </div>
            </div>
          ) : (
            <div
              className={styles.logIn}
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </div>
          )}
        </div>
      </div>

      <Nav visible={visible} menu={menu}></Nav>
    </div>
  );
};

export default Header;
