import React from "react";


const AddForm = () => {
    return (
        <wrap>
            <div>
                <div>
                    <div>세부정보</div>
                    <div>세부정보 재사용</div>
                </div>
                <div>
                    <div>
                        <div>제목</div>
                        <input type="text" maxLength="40" placeholder="동영상을 설명하는 제목을 추가하세요"></input>
                    </div>
                    <div>
                        <div>설명</div>
                        <textarea placeholder="시청자에게 동영상에 대해 알려주세요"></textarea>
                    </div>                    
                </div>
                <div>
                    <div>미리보기 이미지</div>
                    <div>동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요. 
                        시청자의 시선을 사로잡을만한 이미지를 사용해 보세요.</div>
                    <span>자세히 알아보기</span>
                    <label>미리보기 이미지 업로드</label>
                </div>
                <select>
                    <option>--카테고리를 선택해주세요--</option>
                    <option>음악</option>
                    <option>게임</option>
                    <option>캠핑</option>
                    <option>요리</option>
                    <option>애니메이션</option>
                </select>
            </div>

        </wrap>
    )
}

export default AddForm;