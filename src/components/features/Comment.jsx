import React, { useState } from "react";
import styles from "../css_modules/Comment.module.css";
//btn
import Btn from "../elements/Btn";

const Comment = () => {
  //Hook
  const [checkBtn, setCheckBtn] = useState(false);
  //이벤트 함수
  const showBtn = () => {
    return (
      <div className={styles.btnWrap}>
        <Btn>취소</Btn>
        <Btn backgroundColor="ligth-gray" color="gray" height="40px">
          등록
        </Btn>
      </div>
    );
  };
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
