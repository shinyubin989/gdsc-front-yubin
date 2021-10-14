import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";

import PinBoardCategory from "./PinBoardCategory";
import { categoryList } from "../dummy";

const BoardWrapper = styled.div`
  margin: 12px 12px 12px 12px;
  padding-left: 16px;
  padding-bottom: 16px;
  padding-top: 16px;
  border-radius: 5px;
  border: 2px solid ${COLORS.grey_300};
`;


const SliderBoard = ({ boardPin, setBoardPin }) => {
  const categoryList = [
    {
      categoryName: "자유게시판",
      to: "/board/list/1",
      isOn: boardPin.isOnFree,
      category: "isOnFree",
    },
    {
      categoryName: "비밀게시판",
      to: "/board/list/2",
      isOn: boardPin.isOnSecret,
      category: "isOnSecret",
    },
    {
      categoryName: "졸업생게시판",
      to: "/board/list/3",
      isOn: boardPin.isOnGraduate,
      category: "isOnGraduate",
    },
    {
      categoryName: "새내기게시판",
      to: "/board/list/4",
      isOn: boardPin.isOnFreshman,
      category: "isOnFreshman",
    },
    {
      categoryName: "시사이슈게시판",
      to: "/board/list/5",
      isOn: boardPin.isOnIssue,
      category: "isOnIssue",
    },
    {
      categoryName: "정보게시판",
      to: "/board/list/6",
      isOn: boardPin.isOnInformation,
      category: "isOnInformation",
    },
  ]

  const onChangePin = (category) => {
    const storage = JSON.parse(window.localStorage.getItem("board_pin"));
    const isPinOn = storage[category];
    if(isPinOn){
      const newObj = {...boardPin, [category]: true};
      window.localStorage.setItem("board_pin", JSON.stringify(newObj));
      setBoardPin(newObj);
    } else {
      const newObj = {...boardPin, [category]: false};
      window.localStorage.setItem("board_pin", JSON.stringify(newObj));
      setBoardPin(newObj);
    }
  }
  
  return (
    <BoardWrapper>
      {categoryList.map((item) => (
        <PinBoardCategory
          categoryName={item.categoryName}
          to={item.to}
          isOn={item.isOn}
          category={item.category}
          onChangePin={() => onChangePin(item.category)}
        />
      ))}
    </BoardWrapper>
  );
};

export default SliderBoard;
