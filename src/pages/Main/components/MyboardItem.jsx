import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import newImg from "../../../assets/icon/new.svg";

const ContentWrapper = styled.div`
    display: block;
    margin-bottom: 20px;
    margin-left: 15px;
    margin-right: 15px;


    .myboard {
        display: flex;
        justify-content: space-between;
        
        .myboard-left {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 12px;
            .category {
                font-weight: 400;
                font-size: 12px;
            }
            .title {
                text-align: left;
                color: rgb(166, 166, 166);
                font-weight: 400;
                font-size: 12px;
                margin-left: 12px;
            }
        }

        .myboard-right {
            .isNew {
                width: 12px;
                height: 12px;
                margin-left: auto;
            }
        }
    }

    

`;

/*
    category: "자유게시판",
    title: "기숙사 예비 받았는데",
    isNew: true,
*/


const MyboardItem = ({content}) => {
    const newIcon = content.isNew ? newImg : '';
    return(
        <ContentWrapper>
            <Link>
                <div className="myboard">
                    <div className="myboard-left">
                        <div className="category">{content.category}</div>
                        <div className="title">{content.title}</div>
                    </div>
                    <div className="myboard-right">
                        <div className="isNew">
                            <img src={newIcon} />
                        </div>
                    </div>
                </div>
                
            </Link>
        </ContentWrapper>
    );
};

export default MyboardItem;