import React from "react";
import styled from "styled-components";

const ProfileImg = (props) => {
  return (
    <ProfileImgStyle
      backgroundImgUrl={props.backgroundImgUrl}
      onClick={props.onClick}
      value={props.value}
      borderRadius={props.borderRadius}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </ProfileImgStyle>
  );
};

const ProfileImgStyle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || "50%"};
  border: none;
  background-image: url(${(props) => props.backgroundImgUrl});
  background-size: cover;
  background-position: center;
`;

export default ProfileImg;
