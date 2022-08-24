import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComment } from "../../redux/modules/commentListSlice";
import styles from "../css_modules/Comment.module.css";
import ProfileImg from "../elements/ProfileImg";
import baseImg from "../../res/img/base_profile.jpeg";

const CommentList = ({ token, userInfo, id }) => {
  //Hook

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getComment({ postId: id }));
  }, []);

  const commentList = useSelector((state) => state.commentList.result);

  return (
    <div>
      {commentList.length > 0 ? (
        commentList.map((list) => {
          return (
            <div className={styles.listWrap} key={list.commentId}>
              <div className={styles.profile}>
                <ProfileImg height="45%" backgroundImgUrl={baseImg} />
              </div>
              <span>{list.channel}</span>
              <span>{list.comment}</span>
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
