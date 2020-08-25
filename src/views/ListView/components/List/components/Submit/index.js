import React from "react";
import { SUBMIT_A_LINK } from "../../../../../../constants/messageConstants"
import { css } from "styled-components/macro";

const Submit = (props) => {

    const handleSubmit = (link) => props.onSubmitNewLink();
    return (
        <li
            onClick={handleSubmit.bind(null, props.link)}
            css={
                css`display: flex;
                    justify-content: flex-start;
                    position: relative;
                    padding: 7px;
                    border-radius: 5px;
                    margin-bottom: 15px;
                    border: 1px solid #ddd;
                    background-color: #f6f6f6;
                    cursor: pointer;`
            }
        >
            {/* <Square css={css`font-size: 6rem;`} text="+" subtext=""></Square> */}
            <div css={css
                `width: 100px;
            height: 100px;
            background-color: #ececec;
            border: 1.5px solid #aaaaaa;
            border-radius: 5px;
            position: relative;
            line-height: 100px;
        `}>
                <span css={css`position: absolute; left: 50%; transform: translate(-50%, -58%); color: #000; font-size: 8rem; font-weight: 750; top: 50%;`}>+</span>
            </div>
            <div css={css`margin-left: 15px; overflow: hidden;`}>
                <h4 css={css`margin-bottom: 0; margin-left:2rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 3.2rem; line-height: 100px; font-weight:6500; max-width:25rem; `}>{SUBMIT_A_LINK}</h4>
            </div>
        </li>
    );
};

export default Submit;