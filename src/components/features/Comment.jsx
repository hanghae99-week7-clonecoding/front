import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendComment } from "../../redux/modules/commentSlice";

import styles from "../css_modules/Comment.module.css";
//btn
import Btn from "../elements/Btn";

const Comment = ({ token }) => {
  //Hook
  const inputVal = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.comment);
  //State
  const [checkBtn, setCheckBtn] = useState(false); //취소,등록버튼 보여주게 처
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
    dispatch(sendComment({ postId: 1, comment: inputVal.current.value }));
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
      <div className={styles.listContent}>
        {data ? <button>으아</button> : <button>수정</button>}
      </div>
    </div>
  );
};

export default Comment;
