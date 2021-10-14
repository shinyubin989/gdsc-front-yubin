import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../../components/Colors";

import likeImg from "../../../../assets/icon/like.png";
import commentImg from "../../../../assets/icon/comment.png";

const BoardCategoryItemWrapper = styled.div`
  .board-container{
    padding: 8px 16px;
    border-bottom: 1px solid rgb(201, 205, 210);
    .title{
      font-size: 14px;
      font-weight: 700;
    }
    .content{
      font-size: 12px;
      font-weight: 400;
      line-height: 1.6;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .like-and-comment{
      display: flex;
      float: right;
      .like-wrapper{
        .like-img{
        width: 10px;
        height: 10px;
          .like-text{
            color: ${COLORS.red};
            font-size: 10px;
            font-weight: 400;
            margin-right: 5px;
          }
        }
      }
      .comment-wrapper{
        .comment-img{
        width: 10px;
        height: 10px;

        .comment-text{
          color: rgb(12, 165, 175);
          font-size: 10px;
          font-weight: 400;
        }
      }
      }
      
    }
  }
  
`;

const BoardCategoryItem = ({ key, title, content, like, comment }) => {
  return (
    <BoardCategoryItemWrapper>
      <div className="board-container">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="like-and-comment arrange-center-center">
          <div className="like-wrapper">
            <img className="like-img" src={likeImg} alt="like image"></img>
            <span className="like-text">{like}</span>
          </div>
          <div className="comment-wrapper">
            <img className="comment-img" src={commentImg} alt="comment image"></img>
            <span className="comment-text">{comment}</span>
          </div>
        </div>
      </div>
    </BoardCategoryItemWrapper>
  );
};

export default BoardCategoryItem;
