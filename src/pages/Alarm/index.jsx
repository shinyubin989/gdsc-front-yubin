import React from "react";
import styled from "styled-components";
import BottomNavigation from "../../layout/BottomNavigation";

import Alarm from "./components/Alarm";
import { dummyMessage } from "../../components/dummyData";

const TopWrapper = styled.div`
  display: flex;
  height: 48px;
  background-color: white;

  .top-navi {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
  }
`;


const Index = () => {
  return (
    <div>
      <TopWrapper>
        <div classname="except-bottom-navigation">
          <div className="top-navi">
            <h1>쪽지함</h1>
          </div>
        </div>
      </TopWrapper>
      <div className="alarm">
        <Alarm contents={dummyMessage} />
      </div>
      <div className="bottom-navigation">
        <BottomNavigation activeNum={3}/>
      </div>
    </div>
  );
};

export default Index;