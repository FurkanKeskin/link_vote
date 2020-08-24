import React from "react";
import { css } from "styled-components/macro";

const Square = (props) => {
    return (
        <div css={css
            `width: 100px;
            height: 100px;
            background-color: #ececec;
            border: 1.5px solid #aaaaaa;
            border-radius: 5px;
            position: relative;
            line-height: 100px;
        `}>
            <span css={css`position: absolute; left: 50%; transform: translate(-50%, -58%); color: #000; font-size: 3rem; font-weight: 700; top: 50%;`}>{props.text}</span>
            <span css={css`position: absolute; left: 50%; transform: translate(-50%, -58%); font-size: 16px; top: 85%; font-weight: 600; text-transform: uppercase; `}>{props.subtext}</span>
        </div>
    );
};

export default Square;