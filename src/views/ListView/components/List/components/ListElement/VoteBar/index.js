
import React from "react";
import { Arrow } from "../../../../../../../ui-component-library";
import { css } from "styled-components/macro";
import { UP_VOTE, DOWN_VOTE } from "../../../../../../../constants/messageConstants";
const VoteBar = (props) => {

    const upVoteHandler = e => {
        props.upVoteIsClicked(props.link);
        e.stopPropagation();
    };
    const downVoteHandler = e => {
        props.downVoteIsClicked(props.link);
        e.stopPropagation();
    };

    return (

        <div css={css`margin-left: 15px;
                        overflow: hidden;
                        @media only screen and (max-width: 420px) {
                            margin-left: 15px;
                            font-size: 1.2rem;
                            max-width: 12rem;
                            }`}>
            <h4 css={css`margin-bottom: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 2rem;
                    font-weight:640;
                    @media only screen and (max-width: 420px) {
                        font-size: 1.2rem;
                    }`}>
                {props.link.name || props.name}
            </h4>
            <a href={props.link.url} onClick={e => e.stopPropagation()}
                css={css`color: #898686;
                     font-size:1.3rem; 
                     @media only screen and (max-width: 420px) {
                    font-size: 1.rem;}`}>({props.link.url})
           </a>
            {(
                <div css={css`cursor: pointer; display: flex; margin-top:10%;`}>
                    <div onClick={upVoteHandler}>
                        <Arrow width="25" height="25" fill="#aaaaaa" rotateDeg="90" />
                        <div css={css`display: inline; color: #aaaaaa; font-size: 14px; font-weight: 600; user-select: none;`}>{UP_VOTE}</div>
                    </div>
                    <div css={css`padding-left: 10rem;
            @media only screen and (max-width: 420px){
                padding-left: 0rem;
            }`} onClick={downVoteHandler}>
                        <Arrow width="25" height="25" fill="#aaaaaa" rotateDeg="-90" />
                        <div css={css`display: inline; color: #aaaaaa; font-size: 14px; font-weight: 600; user-select: none;`}>{DOWN_VOTE}</div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default VoteBar;


