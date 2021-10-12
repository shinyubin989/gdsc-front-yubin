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
    transform: rotate(180deg);
  }
  .upper-text {
      font-size: 15x;
      font-weight: bold;
      margin-left: 20px;
  }
`;

const MyPageNavigation = ( {pageName} ) => {
  return (
    <NavigationWrapper>
        <Link to="/">
            <img src={arrow} alt="back" />
        </Link>
        <div className="upper-text">{pageName}</div>
    </NavigationWrapper>
  );
};

export default MyPageNavigation;