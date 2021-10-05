import React from "react";
import styled from "styled-components";
import temp from "../../assets/img/temp.png";
import { COLORS } from "../../components/Colors";
import { Link } from "react-router-dom";
import TopNavigation from "../../layout/TopNavigation";

const AccountInformation = styled.div`
  display: block;
  padding: 10px, 10px, 10px, 10px;
  div {
    display: flex;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 10%;
      margin-right: 10px;
    }
    .profile {
      display: block;
      account-text {
        font-weight: 500;
        margin-bottom: 3px;
      }
      p {
        font-size: 14px;
        font-weight: 300;
        margin-top: 5px;
        color: ${COLORS.grey_text};
      }
    }
  }
`;

const Menu = styled.div`
  display: block;
  margin-left: 20px;
  .account-menu {
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .account-text {
    margin-left: 8px;
    font-size: 20px;
    font-weight: 500;
  }
  .menu-selec {
    margin-left: 8px;
    margin-top: 15px;
    font-size: 15px;
    font-weight: 300;
  }
`;

const Index = () => {
  return (
    <div>
      <TopNavigation activePage="myPage" />
      <AccountInformation>
        <div className="board-wrapper">
          <div className="arrow-image">
            <img src={temp} alt="프로필 사진"/>
          </div>

          <div className="profile">
            <account-text>shinyubin989</account-text>
            <p>신유빈</p>
            <p>컴퓨터공학과 20학번</p>
          </div>
        </div>
      </AccountInformation>
      <Menu>
        <div className="board-wrapper">
          <div className="account-menu">
            <account-text>계정</account-text>
            <Link to="/mypage/authUniv">
              <p className="menu-selec">학교 인증</p>
            </Link>
            <Link to="/mypage/changeNick">
              <p className="menu-selec">닉네임 변경</p>
            </Link>
            <div className="menu-selec" onClick={() => alert("회원 탈퇴")}>
              
            </div>
            <p className="menu-selec" onClick={() => alert("로그아웃")}>
              로그아웃
            </p>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default Index;