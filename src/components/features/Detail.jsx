import React from "react";
import styles from "../css_modules/Detail.module.css";
//fontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
//btn
import Btn from "../elements/Btn";
//DetailRight
import DetailRight from "./DetailRight";

const Detail = ({ children }) => {
  return (
    <div className={styles.detailWrap}>
      <div className={styles.contentLeft}>
        <div className={styles.payler}>
          <iframe
            width="787"
            height="443"
            src="https://www.youtube.com/embed/JxS5E-kZc2s?rel=0&amp;autoplay=1&mute=1&amp;loop=1;playlist=JxS5E-kZc2s"
            title="Funny Cats Compilation (Most Popular) Part 1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.title}>
          <h2>
            Funniest Cats 😹 - Don't try to hold back Laughter 😂 - Funny Cats
            Life
          </h2>
          <div className={styles.titleInfo}>
            <span>조회수 63,037,206회 . 2020. 10. 29.</span>
            <span>
              <Btn>
                <FontAwesomeIcon icon={faThumbsUp} />
                좋아요
              </Btn>
              <Btn>
                <FontAwesomeIcon icon={faThumbsDown} />
                싫어요
              </Btn>
              <Btn>
                <FontAwesomeIcon icon={faShare} />
                공유
              </Btn>
              <Btn>
                <FontAwesomeIcon icon={faDownload} />
                저장
              </Btn>
              <Btn>
                <FontAwesomeIcon icon={faEllipsis} />
              </Btn>
            </span>
          </div>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.imgArea}>
            <div></div>
          </div>
          {/* <img src="../../res/img/cat.jpeg" alt="프로필 이미지" /> */}
          <div className={styles.user}>
            <div className={styles.userName}>Aww Animals</div>
            <div className={styles.userSubScriptNum}>구독자 354만명</div>
            <p>
              Watching funny baby cats is the hardest try not to laugh
              challenge. Baby cats are amazing pets because they are the cutest
              and most funny. This is the cutest and best video ever. It is
              funny and cute!
            </p>
            <span>자세히</span>
          </div>
          <Btn backgroundColor="red" color="#fff">
            구독
          </Btn>
        </div>
        <div className="commentsArea">{children}</div>
      </div>
      <div className={styles.contentRight}>
        <DetailRight />
      </div>
    </div>
  );
};
export default Detail;
