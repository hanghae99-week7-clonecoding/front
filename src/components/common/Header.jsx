import React, { useEffect, useState } from "react";
import styles from "../css_modules/Header.module.css";
import styled from "styled-components";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../res/cookie";

const Header = () => {
  const navigate = useNavigate();
  const [menu, Setmenu] = useState(false);
  const [visible, Setvisible] = useState(false);
  const token = getCookie("jwtToken");
  const userImg = getCookie("userImg");
  const [loginState, setLoginState] = useState(false);
  const [search, Setsearch] = useState({
    search: "",
  });

  const logoutHandler = () => {
    removeCookie("jwtToken");
    removeCookie("userImg");
    removeCookie("userChannel");
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setsearch({ ...search, [name]: value });
    console.log(search);
  };
  const onSearchHandler = () => {};
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
          <div className={styles.logo}>
            <img
              className={styles.logoimg}
              src="/img/logo2.png"
              alt="유튜브사진"
            ></img>
          </div>
        </div>
        <form className={styles.HeaderForm}>
          <input
            name="search"
            onChange={onChangeHandler}
            placeholder="검색"
            className={styles.HeaderInput}
          ></input>
          <button
            onClick={() => {
              onSearchHandler();
            }}
          >
            <FontAwesomeIcon
              style={{ height: "15px" }}
              icon={faMagnifyingGlass}
            ></FontAwesomeIcon>
          </button>
        </form>
        <div className={styles.HeaderSerch}>
          <div>
            <FontAwesomeIcon
              onClick={(e) => {
                // console.log(e.target.id)
                navigate("/addform", { state: { add: "add" } });
              }}
              icon={faCamera}
            ></FontAwesomeIcon>
          </div>
          {token ? (
            <div>
              <img className={styles.userImg} src={userImg} alt="이미지"></img>
              <div
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
