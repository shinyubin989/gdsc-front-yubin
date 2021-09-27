import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

import MyboardItem from "./MyboardItem";

const BoardWrapper = styled.div`
    display: block;
    margin-top: 20px;

    .toptop {
        margin: 12px 16px;
        display: flex;
        justify-content: space-between;

        .title {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
        }
        .look-more {
            float: right;
            h3 {
                font-size: 14px;
                color: ${COLORS.red};
            }
        }
    }
`;

const Myboard = ({contents}) => {
    return (
        <BoardWrapper className="board-wrapper">
            <div className="toptop">
                <h1 className="title">즐겨찾는 게시판</h1>
                <div className="look-more">
                    <Link to="/board">
                        <h3>더 보기 &gt;</h3>
                    </Link>
                </div>
            </div>
            <div>
                { contents.map((content, index) => (
                        <MyboardItem content={content}/>
                  )
                )}
            </div>
        </BoardWrapper>
    );
};

export default Myboard;