import React from "react";

const AddForm = () => {
    return (
        <div>
            <input placeholder="동영상 제목"></input>
            <input placeholder="동영상 미리보기"></input>
            <input placeholder="동영상 URL"></input>
            <select>
                <option>--카테고리를 선택해주세요--</option>
                <option>음악</option>
                <option>게임</option>
                <option>캠핑</option>
                <option>요리</option>
                <option>애니메이션</option>
            </select>
        </div>
    )
}

export default AddForm;