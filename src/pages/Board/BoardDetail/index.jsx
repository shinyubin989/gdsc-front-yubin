import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";
import arrow from "../../../assets/vector/arrow.svg";
import search from "../../../assets/nav/search.svg";
import { dummyPost } from "../dummy";
import { comments } from "../dummy";

import BoardDetail from "./components/BoardDetail";
import Comment from "./components/Comment";

const MainWrapper = styled.div`
.top-navi{
    justify-content: space-between;
    height: 48px;
    margin: 16px 16px 16px 16px;
    .navi-left{
      display: flex;
      img {
        transform: rotate(180deg);
        width: 20px;
        height: 20px;
      }
      .board-name {
        padding-left: 16px;
        font-size: 15x;
        font-weight: 500;
      } 
    }
    .navi-right{
      img {
        width: 20px;
        height: 20px;
      }
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
          <div className="board-name">
            <span>자유게시판</span>
          </div>
        </div>
        <div className="navi-right">
          <Link to="/search">
            <img src={search} alt="search" />
          </Link>
        </div>
      </div>

      <div className="board-category-board">
            <BoardDetail dummyPosts={dummyPost}/>
      </div>

      <div className="comment-wrapper">
            <Comment dummyComments={comments}/>
      </div>



    </MainWrapper>
  );
};

export default Index;
