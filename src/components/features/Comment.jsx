import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { sendComment } from "../../redux/modules/commentSlice";
import styles from "../css_modules/Comment.module.css";
//element
import Btn from "../elements/Btn";
import ProfileImg from "../elements/ProfileImg";
import baseImg from "../../res/img/base_profile.jpeg";
//컴포넌트
import CommentList from "./CommentList";

const Comment = ({ token, posiId, userInfo }) => {
  //Hook
  const inputVal = useRef();
  const dispatch = useDispatch();

  //State
  const [checkBtn, setCheckBtn] = useState(false); //취소,등록버튼 보여주게 처리

  //이벤트 함수
  const showBtn = () => {
    if (token !== undefined) {
      return (
        <div className={styles.btnWrap}>
          <Btn onClick={() => setCheckBtn(false)}>취소</Btn>
          <Btn
            backgroundColor="ligth-gray"
            color="gray"
            height="40px"
            onClick={addComment}
          >
            등록
          </Btn>
        </div>
      );
    } else {
      alert("로그인 후 댓글을 이용해주시기 바랍니다.");
    }
  };
  //댓글등록하기
  const addComment = () => {
    dispatch(sendComment({ postId: posiId, comment: inputVal.current.value }));
  };

  //리턴
  return (
    <div className={styles.commentWrap}>
      <div className={styles.writeContent}>
        <div className={styles.commentWrite}>
          <div className={styles.profile}>
            {token !== undefined ? (
              //도우님꺼 Merge 받으면 프롭스값 넣기
              <ProfileImg height="45%" backgroundImgUrl={baseImg} />
            ) : (
              <ProfileImg height="45%" backgroundImgUrl={baseImg} />
            )}
          </div>
          <div className={styles.comment}>
            <input
              type="text"
              ref={inputVal}
              name="comment"
              placeholder="댓글추가..."
              onClick={() => setCheckBtn(true)}
            />
          </div>
        </div>
        {checkBtn ? showBtn() : null}
      </div>

      <div className={styles.listContent}>
        <CommentList token={token} userInfo={userInfo} id={posiId} />
      </div>
    </div>
  );
};

export default Comment;
