import React, { useState } from "react";
import styles from "../css_modules/Header.module.css";
import styled from "styled-components";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menu, Setmenu] = useState(false);
  const [visible, Setvisible] = useState(false);
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
              style={{ width: "100px" }}
              src="https://raw.githubusercontent.com/zzinao/cloneProjectReact/zzinao/src/shared/img/Youtube-Logo.png"
              alt="유튜브사진"
            ></img>
          </div>
        </div>
        <form className={styles.HeaderForm}>
          <input className={styles.HeaderInput}></input>
          <button>검색!</button>
        </form>
        <div className={styles.HeaderSerch}>
          <div>카메라</div>
          <div>로그인</div>
        </div>
      </div>

      <Nav visible={visible} menu={menu}></Nav>
    </div>
  );
};

export default Header;
