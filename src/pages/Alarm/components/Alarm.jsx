import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

import AlarmItem from "./AlarmItem";

const AlarmWrapper = styled.div`
    display: block;
`;

const Alarm = ({contents}) => {
    return (
        <AlarmWrapper className="alarm-wrapper">
            <div>
                { contents.map((content, index) => (
                        <AlarmItem content={content}/>
                  )
                )}
            </div>

        </AlarmWrapper>
    );
};

export default Alarm;