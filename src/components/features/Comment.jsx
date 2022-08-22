import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { sendComment } from "../../redux/modules/commentSlice";

import styles from "../css_modules/Comment.module.css";
//btn
import Btn from "../elements/Btn";

const Comment = () => {
  //Hook
  const inputVal = useRef();
  const dispatch = useDispatch();
  //State
  const [checkBtn, setCheckBtn] = useState(false);
  //이벤트 함수
  const showBtn = () => {
    return (
      <div className={styles.btnWrap}>
        <Btn>취소</Btn>
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
  };
  const addComment = () => {
    dispatch(sendComment({ postID: 1, comment: inputVal.current.value }));
  };
  //리턴
  return (
    <div className={styles.commentWrap}>
      <div className={styles.writeContent}>
        <div className={styles.commentWrite}>
          <div className={styles.profile}>
            {/* 이미지는 해당영역의 백그라운드로 들어갈 예정 */}
            <div></div>
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
      <div className={styles.listContent}></div>
    </div>
  );
};

export default Comment;
