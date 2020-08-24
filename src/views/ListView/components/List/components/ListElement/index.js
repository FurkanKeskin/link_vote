import React, { useState } from "react";
import { Square } from "../../../../../../ui-component-library";
import LinkDeleteIcon from "./LinkDeleteIcon";
import PropTypes from "prop-types";
import { css } from "styled-components/macro";
import VoteBar from "./VoteBar";

const ListElement = (props) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);
    const mouseEnterHandler = () => setShowDeleteIcon(true);
    const mouseLeaveHandler = () => setShowDeleteIcon(false);
 
    return (
        <li
            style={{ cursor: props.cursor }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            css={
                css`display: flex;
                    justify-content: flex-start;
                    position: relative;
                    padding: 7px;
                    margin-bottom: 15px;
                    border-radius: 5px;
                    &:hover { border: 1px solid #ddd; background-color: #f6f6f6; } `
            }
        >
            <Square text={props.squareText} subtext={props.squareSubtext} />
            <VoteBar link={props.link} name={props.name} upVoteIsClicked={props.upVoteIsClicked} downVoteIsClicked = {props.downVoteIsClicked} />
            {showDeleteIcon && (
                <LinkDeleteIcon link={props.link} deleteIconIsClicked={props.deleteIconIsClicked}/>
            )}
        </li>
    );
};

ListElement.propTypes = {
    link: PropTypes.object,
    name: PropTypes.string,
    url: PropTypes.string,
    squareText: PropTypes.number,
    squareSubtext: PropTypes.string,
    showHeader: PropTypes.bool,
    showUrl: PropTypes.bool,
    showButtons: PropTypes.bool,
    showDeleteIcon: PropTypes.bool,
    canSubmit: PropTypes.bool,
    cursor: PropTypes.string,
};

ListElement.defaultProps = {
    link: {},
    name: "",
    url: "",
    points: "+",
    squareText: undefined,
    squareSubtext: "points",
    showHeader: true,
    showUrl: true,
    showButtons: true,
    showDeleteIcon: true,
    canSubmit: false,
    cursor: "",
};

export default ListElement;