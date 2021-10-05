import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import likeIcon from "../../../assets/icon/like.png";
import commentIcon from "../../../assets/icon/comment.png";


const ContentWrapper = styled.div`
    display: block;
    margin-bottom: 20px;
    margin-left: 15px;
    margin-right: 15px;

    .popular-content {
        font-size: 12px;
        font-weight: 400;
    }
    .popular-bottom {
        height: 12px;
        margin-top: 4px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;

        .date {
            color: rgb(166, 166, 166);
            font-size: 10px;
            font-weight: 300;
        }

        .popular-num {
            justify-content: space-between;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            height: 12px;
            img {
                width: 8px;
                height: 8px;
                margin-left: 5px;
            }
            .like-num {
                display: flex;
                color: rgb(198, 41, 23);
                margin-right: 4px;
                font-size: 10px;
                font-weight: 400;
                margin-left: 2px;
            }
            .comments-num {
                display: flex;
                color: rgb(12, 165, 175);
                margin-right: 4px;
                font-size: 10px;
                font-weight: 400;
                margin-left: 2px;

            }
        }
    }

`;

/*
    title: "나 오늘 생일이다",
    date: "14:18",
    like: 10,
    comments: 20,
*/

const PopularItem = ({content}) => {
    return(
        <ContentWrapper>
            <Link>
                <div className="popular-content">{content.title}</div>
                <div className="popular-bottom">
                    <p className="date">{content.date}</p>
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



export default PopularItem;