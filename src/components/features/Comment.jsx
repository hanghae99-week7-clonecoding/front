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

const Comment = ({ token, postId, userInfo, userImg }) => {
  //Hook
  const dispatch = useDispatch();

  //State
  const [checkBtn, setCheckBtn] = useState(false); //취소,등록버튼 보여주게 처리
  const [resultCheck, setReultCheck] = useState(false); //componentList update 시켜줄 프롭스
  const [text, setText] = useState("");

  //이벤트 함수
  const changeText = (e) => {
    setText(e.target.value);
  };
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
    dispatch(
      sendComment({
        postId: postId,
        comment: text,
        setReultCheck,
      })
    );
    setText("");
    setReultCheck(false);
  };

  //리턴
  return (
    <div className={styles.commentWrap}>
      <div className={styles.writeContent}>
        <div className={styles.commentWrite}>
          <div className={styles.profile}>
            {token !== undefined ? (
              //도우님꺼 Merge 받으면 프롭스값 넣기
              <ProfileImg height="45%" backgroundImgUrl={userImg} />
            ) : (
              <ProfileImg height="45%" backgroundImgUrl={baseImg} />
            )}
          </div>
          <div className={styles.comment}>
            <input
              type="text"
              onChange={changeText}
              name="comment"
              placeholder="댓글추가..."
              value={text}
              onClick={() => setCheckBtn(true)}
            />
          </div>
        </div>
        {checkBtn ? showBtn() : null}
      </div>

      <div className={styles.listContent}>
        <CommentList
          token={token}
          userInfo={userInfo}
          id={postId}
          check={resultCheck}
        />
      </div>
    </div>
  );
};

export default Comment;
