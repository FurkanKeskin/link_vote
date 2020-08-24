
import React from "react";
import { Arrow } from "../../../../../../../ui-component-library";
import { css } from "styled-components/macro";

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
 
        <div css={css`margin-left: 15px; overflow: hidden;`}>
        <h4 css={css`margin-bottom: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 2rem;`}>
            {props.link.name || props.name}
        </h4>
        <a href={props.link.url} onClick={e => e.stopPropagation()} css={css`color: #aaaaaa;`}>({props.link.url})</a>
        {(
        <div css={css`cursor: pointer; display: flex;`}>
            <div onClick={upVoteHandler}>
                <Arrow width="25" height="25" fill="#aaaaaa" rotateDeg="90" />
                <div css={css`display: inline; color: #aaaaaa; font-size: 14px; font-weight: 600; user-select: none;`}>Up Vote</div>
            </div>
            <div onClick={downVoteHandler}>
                <Arrow width="25" height="25" fill="#aaaaaa" rotateDeg="-90" />
                <div css={css`display: inline; color: #aaaaaa; font-size: 14px; font-weight: 600; user-select: none;`}>Down Vote</div>
            </div>
        </div>
        )}
    </div>

    );
};

export default VoteBar;


