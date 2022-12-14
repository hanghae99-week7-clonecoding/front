import React, { useEffect, useState } from "react";
import styles from "../css_modules/Main.module.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getMovie, __getCategory } from "../../redux/modules/mainSlice";
import ReactPlayer from "react-player/lazy";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [ref, inview] = useInView(); //보이면 true,안보이면 faluse
  const [page, setPage] = useState(1); //페이지수
  const { lists, isLoading } = useSelector((state) => state.main);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getMovie(page));
  }, [page]);
  const sortTodos = lists.slice().sort((a, b) => b - a);
  useEffect(() => {
    if (inview && !isLoading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inview]);

  const onClickHandler = (event) => {
    const { id } = event.target;
    if (id === "전체") {
      setPage(1);
      dispatch(__getMovie(page));
    }
    dispatch(__getCategory(id));
  };

  return (
    <div className={styles.CategoryBox}>
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
        {sortTodos.map((list, idx) => {
          return (
            <div
              className={styles.videoWrap}
              onClick={() => {
                navigate(`/detail/${list.postId}`);
              }}
              key={idx}
            >
              {sortTodos.length - 1 == idx ? (
                <div ref={ref} className={styles.Video}>
                  <ReactPlayer
                    url={list.url}
                    playing={false}
                    muted={true}
                    controls={true}
                    light={false}
                    poster={list.url}
                    width="400px"
                    height="220px"
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
                      <img
                        className={styles.userImg}
                        src={list.userimage}
                        alt="유저사진"
                      ></img>
                    </div>
                    <div className={styles.pBox}>
                      <p className={styles.PstyleTitle}>{list.title}</p>
                      <p className={styles.Pstyle}>{list.channel}</p>
                      <p className={styles.Pstyle}>{list.updatedAt}</p>
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
                    height="220px"
                  ></ReactPlayer>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <div>
                      <div>
                        <img
                          className={styles.userImg}
                          src={list.userimage}
                          alt="유저사진"
                        ></img>
                      </div>
                    </div>
                    <div className={styles.pBox}>
                      <p className={styles.PstyleTitle}>{list.title}</p>
                      <p className={styles.Pstyle}>{list.channel}</p>
                      <p className={styles.Pstyle}>{list.updatedAt}</p>
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
