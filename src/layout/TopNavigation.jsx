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
    myPage: <MyPageNavigation />,
    signup: <OthersNavigation pageName="회원가입" back="/mypage" />,
    authUniv: <OthersNavigation pageName="학교 인증" back="/mypage" />,
    changeNick: <OthersNavigation pageName="닉네임 변경" back="/mypage" />,
    authEmail: <OthersNavigation pageName="이메일 인증" back="/mypage" />,



}

const TopNavigation = ({ activePage }) => {
    return <TopNavigationWrapper>{mapping[activePage]}</TopNavigationWrapper>
}

export default TopNavigation;