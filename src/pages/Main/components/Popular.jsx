import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

import PopularItem from "./PopularItem";

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

const Popular = ({contents}) => {
    return (
        <BoardWrapper className="board-wrapper">
            <div className="toptop">
                <h1 className="title">HOT 게시물</h1>
                <div className="look-more">
                    <Link to="/board">
                        <h3>더 보기 &gt;</h3>
                    </Link>
                </div>
            </div>
            <div>
                { contents && contents.map((content, index) => (
                        <PopularItem content={content}/>
                  )
                )}
            </div>
        </BoardWrapper>
    );
};

export default Popular;