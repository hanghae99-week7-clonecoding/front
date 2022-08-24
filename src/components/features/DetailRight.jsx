import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMovie } from "../../redux/modules/mainSlice";
import ReactPlayer from "react-player/lazy";
//스타일
import styles from "../css_modules/Detail.module.css";
//무한스크롤
import { useInView } from "react-intersection-observer";

const DetailRight = () => {
  //hook
  const dispatch = useDispatch();
  //state
  const [ref, inview] = useInView(); //보이면 true,안보이면 faluse
  const [page, setPage] = useState(1); //페이지수
  const { lists, isLoading } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(__getMovie(page));
  }, [page]);
  useEffect(() => {
    if (inview && !isLoading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inview]);

  return (
    <>
      {lists.map((list, idx) => {
        return lists.length - 1 == idx ? (
          <div className={styles.rightList} key={idx}>
            <div className={styles.righVideo} ref={ref}>
              <ReactPlayer
                url={list.url}
                playing={false}
                muted={true}
                controls={true}
                light={false}
                poster={list.url}
                width="200px"
                height="110px"
              >
                동영상영역
              </ReactPlayer>
            </div>
            <div className={styles.rightText}>
              <div>{list.title}</div>
              <div>{list.channel}</div>
            </div>
          </div>
        ) : (
          <div className={styles.rightList} key={idx}>
            <div className={styles.righVideo} ref={ref}>
              <ReactPlayer
                url={list.url}
                playing={false}
                muted={true}
                controls={true}
                light={false}
                poster={list.url}
                width="200px"
                height="110px"
              >
                동영상영역
              </ReactPlayer>
            </div>
            <div className={styles.rightText}>
              <div>{list.title}</div>
              <div>{list.channel}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailRight;
