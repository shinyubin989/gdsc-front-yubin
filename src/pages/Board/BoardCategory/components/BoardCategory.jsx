import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../../components/Colors";

import BoardCategoryItem from "./BoardCategoryItem";

const MainWrapper = styled.div`

`;


const BoardCategory = ( { boards } ) => {
  
  return (
    <MainWrapper>
      {boards && boards.map((item) => (
        <Link to={"/board/detail/${content.id}"}>
          <BoardCategoryItem
            key={item.id}
            title={item.title}
            content={item.content}
            like={item.like_num}
            comment={item.comment_num}
          />
        </Link>
       ))}
    </MainWrapper>
  );
};

export default BoardCategory;
