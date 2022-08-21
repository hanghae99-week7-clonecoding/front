import React, { useEffect, useState, useCallback } from "react";
import styles from "../css_modules/Main.module.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getMovie } from "../../redux/modules/mainSlice";
import ReactPlayer from "react-player/lazy";
import { useInView } from "react-intersection-observer";
const Main = () => {
  const [ref, inview] = useInView(); //보이면 true,안보이면 faluse
  const [page, setPage] = useState(1); //페이지수
  const { lists, isLoading } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMovie(page));
  }, [page]);
  useEffect(() => {
    if (inview && !isLoading) {
      setPage((prevState) => prevState + 1);
    }
  }, []);

  console.log(inview);
  console.log(page);
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
        {lists.map((list, idx) => {
          return (
            <div key={idx}>
              <div ref={ref} className={styles.Video}>
                <ReactPlayer
                  url={list.url}
                  playing={false}
                  muted={true}
                  width="400px"
                  height="210px"
                >
                  동영상영역
                </ReactPlayer>
                <div
                  style={{
                    display: "flex",
                    marginTop: "5px",
                  }}
                >
                  <div>
                    <div className={styles.userImg}>프로필사진</div>
                  </div>
                  <div>
                    <p className={styles.PstyleTitle}>타이틀</p>
                    <p className={styles.Pstyle}>유저</p>
                    <p className={styles.Pstyle}>날짜</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
