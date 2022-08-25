import React, { useEffect, useState } from "react";
import styles from "../css_modules/Detail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getDetailData,
  getDeleteForm,
  goodDetail,
} from "../../redux/modules/detailSlice";

//컴포넌트
import Comment from "./Comment";
import DetailRight from "./DetailRight";

//fontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
//동영상
import ReactPlayer from "react-player/lazy";

//element commpo
import Btn from "../elements/Btn";
import ProfileImg from "../elements/ProfileImg";
import baseImg from "../../res/img/base_profile.jpeg";

const Detail = ({ token, userInfo, userImg }) => {
  //Hook
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, result } = useSelector((state) => state.detail);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getDetailData(id));
    }
  }, []);

  const moveAddForm = () => {
    navigate("/addform", { state: { add: "edit", data: result, postId: id } });
  };

  const deleteForm = () => {
    dispatch(getDeleteForm(id));
    navigate("/");
  };
  
  const onClickGoodHandler = () => {
    dispatch(goodDetail(id));
  };

  return (
    <div className={styles.detailWrap}>
      <div className={styles.contentLeft}>
        <div className={styles.payler}>
          <ReactPlayer
            url={result.url}
            playing={true}
            muted={true}
            controls={true}
            light={false}
            poster={result.url}
            width="100%"
            height="443px"
          >
            동영상영역
          </ReactPlayer>
        </div>
        <div className={styles.title}>
          <h2>{result.title}</h2>
          <div className={styles.titleInfo}>
            <span>조회수 63,037,206회 . 2020. 10. 29.</span>
            <span>
              <Btn style={{ display: "flex" }} onClick={onClickGoodHandler}>
                <FontAwesomeIcon icon={faThumbsUp} />
                {result.like}
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

              {token !== undefined && userInfo === result.channel ? (
                <span className={styles.btnWrap}>
                  <Btn onClick={moveAddForm}>수정</Btn>
                  <Btn onClick={deleteForm}>삭제</Btn>
                </span>
              ) : null}
            </span>
          </div>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.imgArea}>
            {token !== undefined && userInfo === result.channel ? (
              <ProfileImg height="45%" backgroundImgUrl={result.userimage} />
            ) : (
              <ProfileImg height="45%" backgroundImgUrl={baseImg} />
            )}
          </div>
          <div className={styles.user}>
            <div className={styles.userName}>{result.channel}</div>
            <div className={styles.userSubScriptNum}>구독자 354만명</div>
            <p>{result.discription}</p>
            <span>자세히</span>
          </div>
          <Btn backgroundColor="red" color="#fff" value="구독">
            구독
          </Btn>
        </div>
        <div className="commentsArea">
          <Comment
            token={token}
            postId={id}
            userInfo={userInfo}
            userImg={userImg}
          />
        </div>
      </div>
      <div className={styles.contentRight}>
        <DetailRight />
      </div>
    </div>
  );
};
export default Detail;
