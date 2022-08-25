import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComment } from "../../redux/modules/commentListSlice";
import styles from "../css_modules/Comment.module.css";
//element commpo
import Btn from "../elements/Btn";
import ProfileImg from "../elements/ProfileImg";
//fontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const CommentList = ({ id, check, token, userInfo }) => {
  //Hook
  const dispatch = useDispatch();
  //state
  const [showDiv, setShowDiv] = useState(false);
  const commentList = useSelector((state) => state.commentList.result);

  useEffect(() => {
    dispatch(getComment({ postId: id }));
  }, [check]);

  //이벤트
  const showUpData = (channel) => {
    if (token !== undefined && userInfo === channel) {
      setShowDiv(!showDiv);
    } else {
      setShowDiv(showDiv);
    }
  };
  const upDateComment = (comId) => {};
  const delDateCommnet = (comId) => {};
  return (
    <div>
      {commentList.length > 0 ? (
        commentList.map((list) => {
          return (
            <div className={styles.listWrap} key={list.commentId}>
              <div className={styles.profile}>
                <ProfileImg height="45%" backgroundImgUrl={list.userimage} />
              </div>
              <div className={styles.listContent}>
                <div>{list.channel}</div>
                <div>{list.comment}</div>
                <div className={styles.iconWrap}>
                  <Btn width="74px">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    2.4천
                  </Btn>
                  <Btn width="74px">
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </Btn>
                  <Btn
                    width="74px"
                    onClick={() => showUpData(list.channel, list.commentId)}
                  >
                    <FontAwesomeIcon icon={faEllipsis} />
                  </Btn>
                  <span>답글</span>
                  {showDiv ? (
                    <div className={styles.controlWrap}>
                      <div onClick={() => upDateComment(list.commentId)}>
                        수정
                      </div>
                      <div onClick={() => delDateCommnet(list.commentId)}>
                        삭제
                      </div>
                    </div>
                  ) : null}
                  <div className={styles.reply}>
                    <FontAwesomeIcon icon={faCaretDown} />
                    &nbsp;답글 19개
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>등록된 댓글이 없습니다.</div>
      )}
    </div>
  );
  //   {
  //     data ? <button>으아</button> : <button>수정</button>;
  //   }
};

export default CommentList;
