import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";
import arrow from "../../../assets/vector/arrow.svg";
import pencil from "../../../assets/icon/pencil.svg";

const MainWrapper = styled.div`
.top-navi{
    justify-content: space-between;
    height: 48px;
    margin: 16px 16px 16px 16px;
    .navi-left{
      display: flex;
      img {
        width: 20px;
        height: 20px;
      }
      .posting-text {
        padding-left: 16px;
        font-size: 15x;
        font-weight: 500;
      } 
    }
    .navi-right{
      button{
        line-height: 12px;
        text-align: center;
        height: 25px;
        width: 50px;
        color: rgb(255,255,255);
        background-color: ${COLORS.red};
        border-radius: 20px;
        font-size: 13px;
      }
    }
  }
`;


const Index = () => {
  return (
    <MainWrapper>
      <div className="top-navi arrange-center">
      <div className="navi-left">
        <Link to="/board">
          <img src={arrow} alt="back" />
        </Link>
        <div className="posting-text">
          
        </div>
      </div>
      <div className="navi-right">
        <button className="upload-button">완료</button>
      </div>
    </div>
      <Link to="/board/post">
        <div className="posting-button">
          <img src={pencil} alt="글쓰기 버튼" />
          <p>글 쓰기</p>
        </div>
      </Link>
    </MainWrapper>
  );
};

export default Index;
