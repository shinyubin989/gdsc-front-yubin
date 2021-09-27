import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

import RealTimeItem from "./RealTimeItem";

const BoardWrapper = styled.div`
    display: block;
    margin-top: 20px;

    .menu-title {
        margin: 12px 16px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }
`;

const RealTimeBoard = ({contents}) => {
    return (
        <BoardWrapper className="board-wrapper">
            <h1 className="menu-title">실시간 인기 글</h1>
            <div>
                { contents.map((content, index) => (
                        <RealTimeItem content={content}/>
                  )
                )}
            </div>
        </BoardWrapper>
    );
};

export default RealTimeBoard;