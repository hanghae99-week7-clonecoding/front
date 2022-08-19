import React from "react";
import styled from "styled-components";

const Btn = (props) => {
  return (
    <StyledGlobalButton
      marginLeft={props.marginLeft}
      backgroundColor={props.backgroundColor}
      onClick={props.onClick}
      value={props.value}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </StyledGlobalButton>
  );
};

const StyledGlobalButton = styled.button`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height};
  border: none;
  color: white;
  background-color: none;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  cursor: pointer;

  margin-left: ${(props) => props.marginLeft};
`;

export default Btn;
