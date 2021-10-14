import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../../components/Colors";

import BoardCategoryItem from "./BoardCategoryItem";

const MainWrapper = styled.div`

`;


const BoardCategory = ( { dummyPosts } ) => {
  return (
    <MainWrapper>
      {dummyPosts && dummyPosts.map((item) => (
        <Link to={item.to}>
          <BoardCategoryItem
            key={item.id}
            title={item.title}
            content={item.content}
            like={item.like}
            comment={item.comment.length}
          />
        </Link>
       ))}
    </MainWrapper>
  );
};

export default BoardCategory;
