import React, { useEffect } from "react";
import styles from "../css_modules/Detail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailData } from "../../redux/modules/detailSlice";

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

//DetailRight
import DetailRight from "./DetailRight";

const Detail = ({ children, token, userInfo }) => {
  console.log(token, userInfo);
  //Hook
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const { isLoading, result } = useSelector((state) => state.detail);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getDetailData(id));
    }
  }, []);

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
              {token !== undefined && userInfo === result.channel ? (
                <div>
                  <Btn
                    onClick={(e) => {
                      navigate("/addform", {
                        state: { add: "edit", data: result },
                      });
                    }}
                    backgroundColor="red"
                  >
                    수정
                  </Btn>
                  <Btn>삭제</Btn>
                </div>
              ) : null}
            </span>
          </div>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.imgArea}>
            <ProfileImg height="45%" backgroundImgUrl={result.userimage} />
          </div>
          <div className={styles.user}>
            <div className={styles.userName}>{result.channel}</div>
            <div className={styles.userSubScriptNum}>구독자 354만명</div>
            <p>{result.discription}</p>
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
