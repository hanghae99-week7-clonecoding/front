import React from "react";
import styles from "../css_modules/Main.module.css";
const Main = () => {
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
          <div>
            <p>타이틀</p>
            <p>유저</p>
            <p>날짜</p>
          </div>
        </div>
        <div>
          <video></video>
          <div>
            <p>타이틀</p>
            <p>유저</p>
            <p>날짜</p>
          </div>
        </div>
        <div>
          <video></video>
          <div>
            <p>타이틀</p>
            <p>유저</p>
            <p>날짜</p>
          </div>
        </div>
        <div>
          <video></video>
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
