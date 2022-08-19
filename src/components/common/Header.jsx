import React, { useState } from "react";
import styles from "../css_modules/Header.module.css";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  const [menu, Setmenu] = useState(false);
  const [visible, Setvisible] = useState(false);
  return (
    <div>
      <div className={styles.HeaderBox}>
        <div className={styles.HeaderLogo}>
          <div className={styles.HeaderHamburger}
            onClick={() => {
              Setmenu((prev) => !prev);
              Setvisible((prev) => !prev);
            }}
          >
            =
          </div>
          <div>youtube</div>
        </div>
        <form className={styles.HeaderForm}>
          <input className={styles.HeaderInput}></input>
          <button>검색!</button>
        </form>
        <div className={styles.HeaderSerch}>
          <div>camera</div>
          <div>로그인</div>
        </div>
      </div>

      <Nav visible={visible} menu={menu}></Nav>
    </div>
  );
};

export default Header;
