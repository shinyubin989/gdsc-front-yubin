import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../../components/Colors";

import likeImg from "../../../../assets/icon/like.png";
import commentImg from "../../../../assets/icon/comment.png";

import userImg from "../../../../assets/img/temp.png";
import moreImg from "../../../../assets/icon/more.svg";

const CommentItemWrapper = styled.div`
  margin-left: 15px;
  border-top: 1px solid rgb(201, 205, 210);
  .top-wrapper{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 10px;
    .left{
      img{
        height: 15px;
        width: 15px;
      }
      span{
        margin-left: 5px;
        font-size: 15px;
        font-weight: 400;
      }
    }
    .right{
      padding-left: 5px;
      padding-right: 5px;
      line-height: 12px;
      height: 20px;
      width: 50px;
      color: rgb(255,255,255);
      background-color: ${COLORS.grey_300};
      border-radius: 5px;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      img{
        width: 10px;
        height: 10px;
      }
      span{
        font-size: 10px;
        color: ${COLORS.grey_500};

      }
    }
  }
  .comment{
    margin-left: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 400;

  }
  .bottom-wrapper{
    margin-left: 10px;
    margin-bottom: 10px;
    .date{
      font-size: 12px;
      font-weight: 300;

    }
  }


`;


const CommentItem = ({ key, nickname, comment, date, like }) => {
  return (
    <CommentItemWrapper>
      <div className="top-wrapper">
        <div className="left">
          <img src={userImg} alt="user image"></img>
          <span>{nickname}</span>
        </div>
        <div className="right arrange-center">
          <img src={likeImg} alt="like"></img>
          <span>|</span>
          <img src={moreImg} alt="more"></img>
        </div>
      </div>
      <div className="comment">{comment}</div>
      <div className="bottom-wrapper">
        <div className="date">{date}</div>
      </div>
    </CommentItemWrapper>
  );
};

export default CommentItem;
