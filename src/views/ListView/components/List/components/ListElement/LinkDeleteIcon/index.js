
import React from "react";
import { DeleteIcon } from "../../../../../../../ui-component-library";
import { css } from "styled-components/macro";

const LinkDeleteIcon = (props) => {

    const deleteHandler = e => {
        props.deleteIconIsClicked(props.link.id);
        e.stopPropagation();
    };

    return (
        <div
            css={css`position: absolute; right: -15px; top: -15px; `} onClick={deleteHandler} title="Delete">
            <DeleteIcon />
        </div>
    );
};

export default LinkDeleteIcon;


