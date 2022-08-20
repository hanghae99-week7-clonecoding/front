import React, { useState } from "react";
import styles from "../css_modules/Main.module.css";
import styled from "styled-components";
const Main = () => {
  const [button, Setbutton] = useState(false);
  return (
    <div className={styles.CategoryBox}>
      <div className={styles.Category}>
        <button>전체</button>
        <button>음악</button>
        <button>요리</button>
        <button>스포츠</button>
        <button>여행</button>
        <button>게임</button>
        <button>기타</button>
      </div>
      <div className={styles.VideoBox}>
        <div className={styles.Video}>
          <video muted loop preload="none">
            동영상영역
          </video>
          <div
            style={{
              display: "flex",
            }}
          >
            <div>프로필사진</div>
            <div>
              <p className={styles.PstyleTitle}>타이틀</p>
              <p className={styles.Pstyle}>유저</p>
              <p className={styles.Pstyle}>날짜</p>
            </div>
          </div>
        </div>
        <div className={styles.Video}>
          <video muted loop preload="none">
            동영상영역
          </video>
          <div>
            <p>타이틀</p>
            <p>유저</p>
            <p>날짜</p>
          </div>
        </div>
        <div className={styles.Video}>
          <video muted loop preload="none">
            동영상영역
          </video>
          <div>
            <p>타이틀</p>
            <p>유저</p>
            <p>날짜</p>
          </div>
        </div>
        <div className={styles.Video}>
          <video muted loop preload="none">
            동영상영역
          </video>
          <div>
            <p>타이틀</p>
            <p>유저</p>
            <p>날짜</p>
          </div>
        </div>

        <div className={styles.Video}>
          <video muted loop preload="none">
            동영상영역
          </video>
          <div>
            <p>타이틀</p>
            <p>유저</p>
            <p>날짜</p>
          </div>
        </div>
        <div className={styles.Video}>
          <video muted loop preload="none">
            동영상영역
          </video>
          <div>
            <p>타이틀</p>
            <p>유저</p>
            <p>날짜</p>
          </div>
        </div>
        <div className={styles.Video}>
          <video muted loop preload="none">
            동영상영역
          </video>
          <div>
            <p>타이틀</p>
            <p>유저</p>
            <p>날짜</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;

const Buttons = styled.button`
  padding: 5px;
  font-size: 15px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 0;
`;
