import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

const CareerWrapper = styled.div`
  .board-wrapper {
    margin: 12px 16px;
      display: flex;
      justify-content: space-between;
      padding: 12px 12px 12px 12px;

      .title {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
      }
      .look-more {
        float: right;
        h3 {
          font-size: 14px;
          color: ${COLORS.red};
        }
      }
  }
`;


const SliderCareer= () => {
  return (
    <CareerWrapper>
      <div className="board-wrapper">
        <div className="title">인기 게시물</div>
      </div>
      <div className="board-wrapper">
        <div className="title">공기업 게시판</div>
        <div className="look-more">
            <Link to="/board">
              <h3>더 보기 &gt;</h3>
            </Link>
          </div>
      </div>
    </CareerWrapper>
  );
};

export default SliderCareer;