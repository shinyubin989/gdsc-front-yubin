import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../../components/Colors";

import likeImg from "../../../../assets/icon/like.png";
import commentImg from "../../../../assets/icon/comment.png";

import userImg from "../../../../assets/img/temp.png";

const BoardDetailItemWrapper = styled.div`
  margin-left: 15px;
  .profile{
    display: flex;

    .user-img{
      img{
        border-radius: 5px;
        height: 30px;
        width: 30px;
      }
    }
    .user-and-date{
      display: block;
      margin-left: 5px;
      .nick{
        p{
          font-size: 14px;
          font-weight: 500;
        }
      }
      .date{
        p{
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
  }



  .content-wrapper{
    .title{

    }
    .contents{
      
    }
  }


`;

const BoardDetailItem = ({ key, nickname, date, title, content, like, comment }) => {
  return (
    <BoardDetailItemWrapper>
      <div className="profile">
        <div className="user-img">
          <img src={userImg} alt="user image"></img>
        </div>
        <div className="user-and-date">
          <div className="nick">
            <p>{nickname}</p>
          </div>
          <div className="date">
            <p>{date}</p>
          </div>
        </div>
      </div>



    </BoardDetailItemWrapper>
  );
};

export default BoardDetailItem;
