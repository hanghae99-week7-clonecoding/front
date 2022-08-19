import React, { useState } from "react";
import styles from "../css_modules/Header.module.css";
import styled from "styled-components";
const Header = () => {
  const [menu, Setmenu] = useState(false);
  return (
    <div>
      <div className={styles.HeaderBox}>
        <div className={styles.HeaderLogo}>
          <div
            onClick={() => {
              Setmenu((prev) => !prev);
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
      {menu ? (
        <Hamburger menu={menu}>
          <div>홈</div>
          <div>전체</div>
          <div>음악</div>
          <div>요리</div>
          <div>스포츠</div>
          <div>여행</div>
          <div>게임</div>
          <div>기타</div>
        </Hamburger>
      ) : null}
    </div>
  );
};
const Hamburger = styled.div`
  height: 500px;
  width: ${({ menu }) => (menu ? "200px" : null)};
  transition: height 400ms ease-in-out;
  background-image: #eeee;
  position: absolute;
  font-size: 20px;
  margin: 10px;

  justify-content: center;
  & > div {
    margin-bottom: 10px;
  }
`;

export default Header;
