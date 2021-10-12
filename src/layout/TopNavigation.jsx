import React from "react";
import styled from "styled-components";

import MyPageNavigation from "./MyPageNavigation";
import OthersNavigation from "./OthersNavigation";

const TopNavigationWrapper = styled.div`
    display: flex;
    height: 54px;
    background-color: white;
`;

const mapping = {
    myPage: <MyPageNavigation pageName="마이페이지"/>,
    signup: <OthersNavigation pageName="회원가입" back="/mypage" />,
    authUniv: <OthersNavigation pageName="학교 인증" back="/mypage" />,
    changeNick: <OthersNavigation pageName="닉네임 변경" back="/mypage" />,
    authEmail: <OthersNavigation pageName="이메일 인증" back="/mypage" />,
    setting: <MyPageNavigation pageName="홈 화면 설정"/>,



}

const TopNavigation = ({ activePage }) => {
    return <TopNavigationWrapper>{mapping[activePage]}</TopNavigationWrapper>
}

export default TopNavigation;