import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import TopNavigation from "../../../layout/TopNavigation";

const MainWrapper = styled.div`
  display: block;
  .title {
    font-size: 20px;
    font-weight: 650;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
  }
  .auth-button {
    margin-top: 10px;
    background-color: ${COLORS.grey_light};
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    border-radius: 5px;
  }
  .disc {
    margin-left: 15px;
    font-size: 12px;
    margin-top: 5px;
    font-weight: 300;
    color: ${COLORS.grey_500};
  }
  h3 {
      margin-left: 13px;
      font-size: 15px;
      font-weight: 400;
  }
`;

const Index = () => {
  return (
    <MainWrapper>
      <TopNavigation activePage="authUniv" />
      <div className="title">인증 방식 선택</div>
      <div className="auth-button">
        <Link to="/mypage/auth/detail">
          <h3>재학생 인증</h3>
          <div className="disc">게시판 등 모든 커뮤니티 이용이 가능하며,</div>
          <div className="disc">재학 중인 학교 이메일을 통해 인증</div>
        </Link>
      </div>
    </MainWrapper>
  );
};

export default Index;