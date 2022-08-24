import React, { useEffect, useState } from "react";
import styles from "../css_modules/Detail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailData, getSubscribe, getDeleteForm } from "../../redux/modules/detailSlice";
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

const Detail = ({ token, userInfo }) => {
  //Hook
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, result } = useSelector((state) => state.detail);
  console.log(result)

  // 구독 구현중 
  const [subs, setSubs] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getDetailData(id));
    }
  }, []);
  // console.log(id)

  // 글 수정
  const moveAddForm = () => {
    navigate("/addform",
      { state: { add: "edit", data: result, postId: id } });
  }

  // 글 삭제 
  const deleteForm = (event) => {
    dispatch(getDeleteForm(id))
    navigate("/")
  }

  // 구독 기능 구현중
  const clickSubs = (event) => {
    setSubs(!subs)
    dispatch(getSubscribe(id))
  }

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
                <span className={styles.btnWrap}>
                  <Btn
                    onClick={moveAddForm}
                  >
                    수정
                  </Btn>
                  <Btn onClick={deleteForm}>삭제</Btn>
                </span>
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
          {/* {!subs ? 
          <Btn backgroundColor="red" color="#fff" onClick={clickSubs}>
            구독
          </Btn> : 
          <Btn backgroundColor="red" color="#fff" onClick={clickSubs}>
            구독중
          </Btn>} */}
          {result.subscribe === '구독자' ? 
          <Btn backgroundColor="red" color="#fff" onClick={clickSubs} value='구독중'>
            구독중
          </Btn> :
            <Btn backgroundColor="red" color="#fff" onClick={clickSubs} value='구독'>
              구독
            </Btn>
          }
        </div>
        <div className="commentsArea">
          <Comment token={token} posiId={id} userInfo={userInfo} />
        </div>
      </div>
      <div className={styles.contentRight}>
        <DetailRight />
      </div>
    </div>
  );
};
export default Detail;
