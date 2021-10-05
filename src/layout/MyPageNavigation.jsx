import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrow from "../assets/vector/arrow.svg";

const NavigationWrapper = styled.div`
  width:100%;
  display: flex;
  padding: 10px;
  margin: 10px;

  img {
    width: 20px;
    height: 20px;
  }
  .upper-text {
      font-size: 15x;
      font-weight: bold;
      margin-left: 20px;
  }
`;

const MyPageNavigation = () => {
  return (
    <NavigationWrapper>
        <Link to="/">
            <img src={arrow} alt="back" />
        </Link>
        <div className="upper-text">내 정보</div>
    </NavigationWrapper>
  );
};

export default MyPageNavigation;