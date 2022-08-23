import React, { useEffect, useState } from "react";
import styles from "../css_modules/Main.module.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getMovie, __getCategory } from "../../redux/modules/mainSlice";
import ReactPlayer from "react-player/lazy";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const [ref, inview] = useInView(); //보이면 true,안보이면 faluse
  const [page, setPage] = useState(1); //페이지수
  const { lists, isLoading } = useSelector((state) => state.main);
  const [category, Setcategory] = useState({
    category: "",
  });
  const dispatch = useDispatch();
  console.log(lists);
  useEffect(() => {
    dispatch(__getMovie(page));
  }, [page]);
  useEffect(() => {
    if (inview && !isLoading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inview]);
  const onClickHandler = (event) => {
    const { id } = event.target;
    dispatch(__getCategory(id));
  };

  console.log(inview);
  console.log(page);
  return (
    <div className={styles.CategoryBox}>
      <div className={styles.NavBox}>
        <div>홈</div>
        <div>탐색</div>
        <div>Shorts</div>
        <div>구독</div>
        <div>보관함</div>
      </div>
      <div className={styles.Category}>
        <button onClick={onClickHandler} id="전체">
          전체
        </button>
        <button onClick={onClickHandler} id="음악">
          음악
        </button>
        <button onClick={onClickHandler} id="요리">
          요리
        </button>
        <button onClick={onClickHandler} id="스포츠">
          스포츠
        </button>
        <button onClick={onClickHandler} id="여행">
          여행
        </button>
        <button onClick={onClickHandler} id="게임">
          게임
        </button>
        <button onClick={onClickHandler} id="기타">
          기타
        </button>
      </div>
      <div className={styles.VideoBox}>
        {lists.map((list, idx) => {
          return (
            <div key={idx}>
              {lists.length - 1 == idx ? (
                <div ref={ref} className={styles.Video}>
                  <ReactPlayer
                    url={list.url}
                    playing={false}
                    muted={true}
                    controls={true}
                    light={false}
                    poster={list.url}
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
                      <div className={styles.userImg}></div>
                    </div>
                    <div>
                      <p className={styles.PstyleTitle}>타이틀</p>
                      <p className={styles.Pstyle}>유저</p>
                      <p className={styles.Pstyle}>날짜</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.Video}>
                  <ReactPlayer
                    url={list.url}
                    playing={false}
                    muted={true}
                    width="400px"
                    height="210px"
                  ></ReactPlayer>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "5px",
                    }}
                  >
                    <div>
                      <div>
                        <img
                          className={styles.userImg}
                          src={list.userimg}
                          alt="유저사진"
                        ></img>
                      </div>
                    </div>
                    <div>
                      <p className={styles.PstyleTitle}>타이틀</p>
                      <p className={styles.Pstyle}>유저</p>
                      <p className={styles.Pstyle}>날짜</p>
                    </div>
                  </div>
                </div>
              )}
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
