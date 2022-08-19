import React from "react";
import styled from "styled-components";
const Nav = ({ visible, menu }) => {
  return (
    <HanmbergerHome>
      <Hamburger visible={visible} menu={menu}>
        <div>youtube</div>
        <div>홈</div>
        <div>전체</div>
        <div>음악</div>
        <div>요리</div>
        <div>스포츠</div>
        <div>여행</div>
        <div>게임</div>
        <div>기타</div>
      </Hamburger>
    </HanmbergerHome>
  );
};
export default Nav;

const HanmbergerHome = styled.div``;

const Hamburger = styled.div`
  width: 50px;
  height: 100vh;
  width: ${({ menu }) => (menu ? "200px" : null)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transition: width 400ms ease-in-out;
  background-color: white;
  position: absolute;
  font-size: 20px;
  z-index: 99;
  box-shadow: 2100px 2000px 2090px 2500px rgba(0, 0, 0, 0.5);
  text-align: center;
  justify-content: space-between;
  padding: 0 0 40px 0;

  top: 0px;
  display: flex;
  flex-direction: column;

  & > div {
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  & > div:hover {
    background-color: aquamarine;
  }
`;
