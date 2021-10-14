import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../../components/Colors";

import CommentItem from "./CommentItem";

import sendImg from "../../../../assets/icon/send.png";

const MainWrapper = styled.div`
  .input-comment-wrapper{
    position: fixed;
    height: 50px;
    width: 100%;
    max-width: 500px;
    bottom: 0px;
    .write-wrapper{
      position: relative;
      width: 100%;
      margin: 0px 8px;
      border-radius: 12px;
      background-color: ${COLORS.grey_300};
      input[type="checkbox"] {
        display: inline-block;
        position: relative;
        width: 10px;
        height: 10px;
        border: 1px solid rgb(158, 164, 170);
        border-radius: 10px;
        margin-left: 10px;
      }
      input[type="checkbox"]:checked {
        width: 10px;
        height: 10px;
        display: inline-block;
        position: relative;
      }
      label {
        margin-left: 8px;
        font-size: 12px;
        font-weight: 700;
        color: rgb(198, 41, 23);
      }
      input[type="text"] {
        display: inline-block;
        width: calc(100% - 100px);
        margin-left: 12px;
        font-size: 14px;
        height: 36px;
      }
      .send{
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }

`;


const Comment = ( { dummyComments } ) => {
  return (
    <MainWrapper>
      {dummyComments && dummyComments.map((item) => (
          <CommentItem
            key={item.id}
            nickname={item.nickname}
            comment={item.comment}
            date={item.date}
            like={item.like}
          />
       ))}


       <div className="input-comment-wrapper arrange-center">
        <div className="write-wrapper">
          <input type="checkbox" name="is_secret" id="is_secret" value="false" />
          <label for="is_secret">익명</label>
          <input type="text" placeholder="댓글을 입력해주세요" spellcheck="false" value="" />
          <button class="send-button">
            <img src={sendImg} alt="send" />
          </button>
        </div>
       </div>
    </MainWrapper>
  );
};

export default Comment;
