import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../../components/Colors";

import BoardDetailItem from "./BoardDetailItem";

const MainWrapper = styled.div`

`;


const BoardCategory = ( { dummyPosts } ) => {
  return (
    <MainWrapper>
      {dummyPosts && dummyPosts.map((item) => (
          <BoardDetailItem
            key={item.id}
            nickname={item.nickname}
            date={item.date}
            title={item.title}
            content={item.content}
            like={item.like}
            comment={item.comment}
          />
       ))}
    </MainWrapper>
  );
};

export default BoardCategory;
