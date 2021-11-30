import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import { COLORS } from "../../components/Colors";
import mypageLogo from "../../assets/nav/mypage.svg";
import searchLogo from "../../assets/nav/search.svg";

import google from "../../assets/icon/google.svg";
import google_black from "../../assets/icon/google_black.svg";
import school from "../../assets/icon/school.svg";
import notice from "../../assets/icon/notice.svg";

import BottomNavigation from "../../layout/BottomNavigation";


import Myboard from "./components/Myboard";
import RealTimeBoard from "./components/RealTimeBoard";
import Popular from "./components/Popular";
import { dummyMyboard, dummyRealtime, dummyHot } from "../../components/dummyData";

import axios from "axios";




const MainWrapper = styled.div`
  width: 100%;
  padding-top: 70px;
  padding-bottom: 48px;
  .main-top-navigation {
    position: fixed; //position: fixed, absolute, relative 에 대해 알아보세요!
    width: 100%;
    max-width: 500px;
    top: 0px;
    height: 70px;
  }
  .top-guide-wrapper {
    padding: 16px; //네비게이션 상하좌우에 여백을 주기 위한 용도입니다.
    background-color: white;
    .everytime-text {
      color: ${COLORS.red};
      font-size: 10px;
    }
    .guide-contents-container {
      margin-top: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: 16px;
        font-weight: 700;
      }
      .icon-wrapper {
        height: 20px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .mypage-icon {
        margin-left: 16px;
      }
    }
  }
  .link-list-wrapper {

    margin-top: 12px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    .icon-block {
        width: 45px;
        height: 45px;
        text-align: center;
        border-radius: 20px;
        cursor: pointer;
        align-items: center;
        background-color: rgb(245, 245, 245);
        margin-right: 5px;
        img {
            display: block;
            position: relative;
            top: 10px;
            margin-left: auto;
            margin-right: auto;
            width: 20px;
            height: 20px;
        }
    }
    .link-item-text {
        font-weight: 400;
        margin-top: 6px;
        font-size: 10px;
        text-align: center;
        word-break: break-word;
    }
  }


  
  .board-wrapper {
    border: 2px solid #e3e3e3;
    border-radius: 5px;
    margin: 24px 8px 0px;

    .myboard-container {
        margin: 12px 16px;

        .myboard-title-wrapper {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
            
            //look more
            h4 {
                font-size: 13px;
                color: ${COLORS.red};
            }
        }

        .myboard-contents-wrapper {
            margin: 0;
            padding: 0;
            font-size: 16px;
            line-height: 1.1;
            color: #292929;
            font-weight: 500;
        }
    }


  }
  .setting-button {
    margin: 10px 16px 10px;
    width: calc(100% - 32px);
    height: 48px;
    border-radius: 10px;
    background-color: ${COLORS.grey_400};
    span {
      width: 100%;
      display: inline-block;
      text-align: center;
      line-height: 1.1;
      font-weight: 700;
      color: ${COLORS.grey_600};
    }
  }
`;

const Index = () => {
  const history = useHistory();
  const [setting, setSetting] = useState({
    isMine: true,
    isRealTime: true,
    isHot: true,
  })
  const onClickBtn= () => {
    history.push("/setting");
  };
  useEffect(() => {
    const defaultSetting = { isMine: true, isRealTime: true, isHot: true};
    const storage = window.localStorage.getItem("setting");
    if(!storage){ //유저가 처음 방문했을 때
      window.localStorage.setItem("setting", JSON.stringify(defaultSetting));
    } else{
      const storageJson = JSON.parse(storage);
      setSetting({
        isMine: storageJson.isMine,
        isHot: storageJson.isHot,
        isRealTime: storageJson.isRealTime,
      })
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("/api/user/test");
        console.log(result)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  });

  return (
    <MainWrapper>
      {/* 상단 네비게이션 start*/}
      <div className="main-top-navigation">
        <div className="top-guide-wrapper">
          <p className="everytime-text">에브리타임</p>
          <div className="guide-contents-container">
            <h2>GDSC 웹</h2>
            <div className="icon-wrapper">
              <Link to="/search">
                <img src={searchLogo} alt="검색 아이콘" />
              </Link>
              <Link to="/mypage" className="mypage-icon">
                <img src={mypageLogo} alt="마이페에지 아이콘" />
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="link-list-wrapper">
          <Link to="https://gdsc.community.dev/seoul-national-university-of-science-and-technology/" className="gdsc-home">
              <div className="icon-block">
                <img src={google} alt="gdsc 홈" />
              </div>
              <p className="link-item-text">GDSC 홈</p>
          </Link>
          <Link to="https://google.com" className="google">
              <div className="icon-block">
                <img src={google_black} alt="google" />
              </div>
              <p className="link-item-text">구글</p>
          </Link>
          <Link to="https://www.seoultech.ac.kr/index.jsp" className="seoultech">
              <div className="icon-block">
                <img src={school} alt="seoultech" />
              </div>
              <p className="link-item-text">학교 홈</p>
          </Link>
          <Link to="https://www.seoultech.ac.kr/life/sch/common/" className="notice">
              <div className="icon-block">
                <img src={notice} alt="notice" />
              </div>
              <p className="link-item-text">학사 공지</p>
          </Link>
      </div>





      <div className="myboard-contents-wrapper">
            <Myboard contents={dummyMyboard}/>
      </div>

      <div className="real-time-board">
            <RealTimeBoard contents={dummyRealtime}/>
      </div>

      <div className="popular">
            <Popular contents={dummyHot} />
      </div>





      {setting.isMine && <Myboard />}
      {setting.isRealTime && <RealTimeBoard />}
      {setting.isHot && <Popular />}

      <button className="setting-button" onClick={onClickBtn}>
        <span>홈 화면 설정</span>
      </button>
      {/* 하단 네비게이션 start */}
      <div className="bottom-navigation">
        <BottomNavigation activeNum={1} />
      </div>
      {/* 하단 네비게이션 end */}
    </MainWrapper>
  );
};

export default Index;