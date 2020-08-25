import React, { useContext } from "react";
import { css } from "styled-components/macro";
import { SORT_ORDER } from "../../../../../../constants/constants";
import { MOST_VOTED, LEAST_VOTED } from "../../../../../../constants/messageConstants";
import { store } from "../../../../../../store/reducers";

const Filter = (props) => {

    const context = useContext(store);
    const { state: { order }, } = context;

    const sortHandler = e => props.sortSelection(e.target.value);
    
    return (
        <select css={
        css`background-color: #D8D8D8; 
        min-width: 19rem;
        min-height: 2.5rem;
        background-color: #ececec;
        border: 0.5px solid #aaaaaa;
        border-radius: 5px;
        position: relative;
        @media only screen and (max-width: 420px) {
            min-width: 14rem;
            }
        `} value={order} onChange={sortHandler}>
            <option css={css`line-height:2rem;`} value={SORT_ORDER.DESC}>{MOST_VOTED}</option>
            <option value={SORT_ORDER.ASC}>{LEAST_VOTED}</option>
        </select>
    );
};

export default Filter;