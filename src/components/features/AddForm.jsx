import React, { useState } from "react";
import styles from "../css_modules/AddForm.module.css"
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { postWritesThunk } from '../../redux/modules/addFormSlice'

const AddForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState()
    const [category, setCategory] = useState()
    const dispatch = useDispatch()

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    // console.log(title)

    const changeContent = (e) => {
        setContent(e.target.value)
    }
    // console.log(content)

    const changeCategory = (e) => {
        setCategory(e.target.value)
    }
    // console.log(category)

    const addPost = () => {
        const data = new FormData();
        data.append('title', title)
        data.append('content', content)
        data.append('category', category)
        data.append('title', title)

        // FormData의 value 확인
        for (let value of data.values()) {
            console.log(value);
        }
        dispatch(postWritesThunk(data))
    }

    return (
        // 타이틀 
        <div className={styles.addFormBox}>
            <div className={styles.textBox}>
                <div>
                    <h2>세부정보</h2>
                </div>
                {/* 동영상 제목, 설명 입력칸 */}
                <div>
                    <div className={styles.textBox2}>
                        <div className={styles.subTitle}>제목(필수 항목)
                        </div>
                        <input onChange={changeTitle} type="text" placeholder="동영상을 설명하는 제목 추가"></input>
                    </div>
                    <div className={styles.textBox2}>
                        <div className={styles.subTitle}>설명</div>
                        <textarea onChange={changeContent} rows="5" placeholder="시청자에게 동영상에 대해 이야기하기"></textarea>
                    </div>
                </div>
                {/* 동영상 썸네일 업로드 칸 */}
                <div >
                    <br />
                    <div>미리보기 이미지</div>
                    <div className={styles.subscribe}>동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요.
                        시청자의 시선을 사로잡을만한 이미지를 사용해 보세요.</div>
                    <span className={styles.add}>자세히 알아보기</span>
                    <br />
                    <div className={styles.fileUpload}>
                        <label htmlFor="input_img" className={styles.textBox3}>미리보기 이미지 업로드</label>
                        <div id="img" type="file" accept=".png, .jgp, .png, .jpeg" className={styles.textBox3} />
                    </div>
                </div>
                {/* 카테고리 선택부분 */}
                <br />
                <div>
                    <div>
                        <div>카테고리</div>
                        <div className={styles.subscribe}>카테고리를 선택해 추가하세요. 카테고리 별로 동영상을 찾기 쉬워집니다.</div>
                        <select onChange={changeCategory} className={styles.selectBox}>
                            <option value="">선택</option>
                            <option value="음악">음악</option>
                            <option value="요리">요리</option>
                            <option value="스포츠">스포츠</option>
                            <option value="게임">게임</option>
                            <option value="여행">여행</option>
                            <option value="학습">학습</option>
                            <option value="기타">기타</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* 업로드 될 동영상 미리보기 부분 */}
            <div>
                <div>
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/5ch94AaPZRQ?autoplay=1&mute=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div>
                        {/* <div>파일 이름</div> */}
                    </div>
                    <div className={styles.fileUpload}>
                        <label className={styles.upload} htmlFor="input_file">
                            업로드
                        </label>
                        <input
                            id="input_file"
                            type="file"
                            accept=".mp4"
                        ></input>
                    </div>
                    {/* 업로드 버튼 */}
                    <div width="100%">
                        <button
                            disabled={
                                title === '' ||
                                content === '' ||
                                category === '선택' ? true : false
                            }
                            onClick={() => addPost()} className={styles.button}>게시글 등록</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddForm;

// 제목 입력 안 됐을 때 유효성 검사
// 물음표 아이콘 