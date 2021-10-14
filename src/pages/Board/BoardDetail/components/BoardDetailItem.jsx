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
      margin-top: 10px;
      font-size: 17px;
      font-weight: 500;
    }
    .contents{
      margin-top: 5px;
      font-size: 13px;
      font-weight: 400;
    }
    .like-and-comment{
      margin-top: 10px;
      display: flex;
      .like{
        img{
          height: 15px;
          width: 15px;
        }
        span{
          margin-left: 5px;
          font-size: 15px;
          font-weight: 400;
          color: ${COLORS.red};
        }
      }
      .comment{
        margin-left: 5px;
        img{
          height: 15px;
          width: 15px;
        }
        span{
          margin-left: 5px;
          font-size: 15px;
          font-weight: 400;
          color: rgb(12, 165, 175);
        }
      }
    }
    .like-button{
      width: 40px;
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 5px 7px 7px;
      background-color: rgb(232, 235, 237);
      border-radius: 5px;
      img{
        width: 10px;
        margin-right: 2px;
      }
      span{
        font-size: 12px;
        font-weight: 700;
        color: rgb(114, 120, 127);
      }
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



      <div className="content-wrapper">
        <div className="title">
          {title}
        </div>
        <div className="contents">
          {content}
        </div>
        <div className="like-and-comment">
          <div className="like">
            <img src={likeImg} alt="like image"></img>
            <span>{like}</span>
          </div>
          <div className="comment">
            <img src={commentImg} alt="comment image"></img>
            <span>{comment}</span>
          </div>
        </div>
        <div className="like-button arrange-center">
          <img src={likeImg} alt="like button image"></img>
          <span>공감</span>
        </div>
      </div>



    </BoardDetailItemWrapper>
  );
};

export default BoardDetailItem;
