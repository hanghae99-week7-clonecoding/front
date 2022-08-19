import React from "react";
import styles from "../css_modules/Header.module.css";
const Header = () => {
  return (
    <div className={styles}>
      <div>=</div>
      <div>youtube</div>
      <form>
        <input></input>
        <div>검색!</div>
      </form>
      <div>
        <div>camera</div>
        <div>로그인</div>
      </div>
    </div>
  );
};

export default Header;
