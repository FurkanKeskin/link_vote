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
        <select css={css`background-color: #D8D8D8`} value={order} onChange={sortHandler}>
            <option value={SORT_ORDER.DESC}>{MOST_VOTED}</option>
            <option value={SORT_ORDER.ASC}>{LEAST_VOTED}</option>
        </select>
    );
};

export default Filter;