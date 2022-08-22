import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Nav = ({ visible, menu }) => {
  return (
    <HanmbergerHome>
      <Hamburger visible={visible} menu={menu}>
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

const HanmbergerHome = styled.div`
  visibility: visible;
  background-color: rgba(0, 0, 0, 0.5);
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Hamburger = styled.div`
  width: 50px;
  height: 100vh;
  width: ${({ menu }) => (menu ? "200px" : null)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transition: width 400ms ease-in-out;
  background-color: white;
  position: absolute;
  font-size: 15px;
  z-index: 99;
  box-shadow: 2100px 2000px 2090px 2500px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  top: 0;
  position: fixed;

  & > div {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    position: relative;
    top: 100px;
  }
  & > div:hover {
    background-color: #eeee;
  }
`;
