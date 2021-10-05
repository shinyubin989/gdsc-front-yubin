import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import xImg from "../assets/vector/xVector.svg";

const NavigationWrapper = styled.div`
  width:100%;
  justify-content: space-between;
  display: flex;
  padding: 10px;
  margin: 10px;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
  .upper-text {
      font-size: 15x;
      font-weight: bold;
  }
`;

const OthersNavigation = ({ pageName, back }) => {
  return (
    <NavigationWrapper>
        <div className="upper-text">{pageName}</div>
        <Link to={back}>
            <img src={xImg} alt="close" />
        </Link>
    </NavigationWrapper>
  );
};

export default OthersNavigation;