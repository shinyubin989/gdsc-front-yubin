import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import arrow from "../../../assets/vector/arrow.svg";
import pencil from "../../../assets/icon/pencil.svg";
import search from "../../../assets/nav/search.svg";
import { dummyPost } from "../dummy";
import { COLORS } from "../../../components/Colors";

import BoardCategory from "./components/BoardCategory";

import axios from "axios";

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
  .bottom-navi{

    position: fixed;
    bottom: 8px;
    left: calc(50% - 36px);
    width: 80px;
    border-radius: 20px;
    background-color: ${COLORS.grey_400};
    display: flex;
    height: 36px;
    .posting-button {
      vertical-align: middle;
      img{
        width: 18px;
        height: 18px;
      }
      span{
        font-size: 12px;
        
      }
    }
  }
`;

const Index = ({ match }) => {

  const category = match.params.category

  console.log(category);


  const [boards, setBoards] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  
  useEffect(() => {
    const categoryId = match.params.category;
    const fetchboards = async () => {
      try {
        const response = await axios.get("/api/board?category=${categoryId}");
        setBoards(response.data.data); // 데이터는 response.data.data 안에 들어있습니다.
      } catch (e) {
        console.log("fail to receive");
      }
    };

    fetchboards();
  }, []);

  
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
            <BoardCategory boards={boards}/>
      </div>




      <div className="bottom-navi arrange-center-center">
        <div className="posting-button">
          <Link to="/board/post/${categoryId}">
              <img src={pencil} alt="글쓰기 버튼" />
              <span>글 쓰기</span>
          </Link>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Index;