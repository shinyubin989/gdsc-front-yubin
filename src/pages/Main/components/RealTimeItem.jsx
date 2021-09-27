import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import noProfileImg from "../../../assets/img/temp.png";
import likeIcon from "../../../assets/icon/like.png";
import commentIcon from "../../../assets/icon/comment.png";
import { COLORS } from "../../../components/Colors";

const ContentWrapper = styled.div`
    display: block;
    margin-bottom: 15px;
    margin-left: 15px;
    margin-right: 15px;

    .popular-top {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 24px;
        justify-content: space-between;

        .profile {
            display: flex;
            img {
                width: 16px;
                height: 16px;
            }
            .nickname {
                font-size: 12px;
                margin-left: 8px;
            }
        }
        .date {
            font-size: 12px;
            color: rgb(166, 166, 166);
            margin-left: auto;
            font-weight: 400;
        }
    }

    .title {
        font-size: 12px;
        font-weight: 700;
        margin-top: 4px;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .popular-content {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        height: 15px;
        margin-bottom: 5px;
        font-size: 11px;
        font-weight: 400;
    }

    .popular-bottom {
        margin-top: 4px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        .popular-category {
            color: rgb(166, 166, 166);
            font-size: 10px;
            font-weight: 300;
        }
        .popular-num {
            display:flex;
            img {
                width: 8px;
                height: 8px;
            }
            .like-num {
                color: rgb(198, 41, 23);
                margin-right: 4px;
                font-size: 10px;
                font-weight: 400;
                margin-left: 2px;

            }
            .comments-num {
                color: rgb(12, 165, 175);
                font-size: 10px;
                font-weight: 400;
                margin-left: 2px;
            }
        }
    }

`;

// profileUrl: "",
// nick: "익명",
// date: "09/05 00:39",
// title: "React 스터디 잘하는방법",
// contents: "hellow word",
// category: "자유게시판",
// comments: 35,
// like: 20,

const RealTimeItem = ({content}) => {
    const profileImg = content.profileUrl ? "" : noProfileImg;
    return(
        <ContentWrapper>
            <Link>
                <div className="popular-top">
                    <div className="profile">
                        <img src={profileImg} alt="프로필 이미지"/>
                        <p className="nickname">{content.nick}</p>
                    </div>
                    <p className="date">{content.date}</p>
                </div>
                <div className="title">{content.title}</div>
                <p className="popular-content">{content.contents}</p>
                <div className="popular-bottom">
                    <p className="popular-category">{content.category}</p>
                    <div className="popular-num">
                        <img src={likeIcon}/>
                        <p className="like-num">{content.like}</p>
                        <img src={commentIcon}/>
                        <p className="comments-num">{content.comments}</p>
                    </div>
                </div>
            </Link>
        </ContentWrapper>
    );
};

export default RealTimeItem;