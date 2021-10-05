import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const ContentWrapper = styled.div`
    display: block;

    .message {
        cursor: pointer;
        display: inline-block;
        width: 100%;
        border-bottom: 1px solid rgb(201, 205, 210);
        padding: 12px 0px;
        

        .message-top {
            display:flex;
            margin: 0px 16px;
            -webkit-box-pack: justify;
            justify-content: space-between;
            .nick {
                font-weight: 700;
                font-size: 14px;

            }
            .date {
                font-weight: 400;
                color: rgb(158, 164, 170);
                font-size: 11px;

            }
        }
        .message-bottom {
            .title {
                display: inline-block;
                font-size: 12px;
                margin: 0px 16px;
                font-weight: 400;

            }
        }
    }
`;

/*
    dummyMessage 

    nick: "익명",
    date: "09/10 19:06",
    title: "GDSC 모집 기간이 지났기 때문에 지금은 지원이 힘들 것 같습니다.",
    id: "2",
*/

const PopularItem = ({content}) => {
    return(
        <ContentWrapper>
            <Link>
            <div className="message">
                <div className="message-top">
                    <div className="nick">{content.nick}</div>
                    <div className="date">{content.date}</div>
                </div>
                
                <div className="message-bottom">
                    <div className="title">{content.title}</div>
                </div>
            </div>
            </Link>
        </ContentWrapper>
    );
};



export default PopularItem;