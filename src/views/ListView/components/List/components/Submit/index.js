import React from "react";
import { css } from "styled-components/macro";
import { Square } from "../../../../../../ui-component-library/";

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
            <Square css={css`font-size: 6rem;`} text="+" subtext=""></Square>
            <div css={css`margin-left: 15px; overflow: hidden;`}>
                <h4 css={css`margin-bottom: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 3rem; line-height: 100px;`}>SUBMIT A LINK</h4>
            </div>
        </li>
    );
};

export default Submit;