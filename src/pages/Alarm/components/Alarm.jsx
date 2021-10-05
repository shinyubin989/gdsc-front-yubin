import React from "react";
import styled from "styled-components";

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