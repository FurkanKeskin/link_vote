import * as actionTypes from "./types";

export const getLinksAction = ({ links, totalItemCount }) => {
    return {
        type: actionTypes.GET_LINKS,
        links,
        totalItemCount,
    };
};

export const addLink = (addedLink) => {
    return {
        type: actionTypes.ADD_LINK,
        addedLink,
    };
};

export const deleteLink = ({ link }) => {
    return {
        type: actionTypes.DELETE_LINK,
        link,
    };
};

export const setOrder = (order) => {
    return {
        type: actionTypes.SET_ORDER,
        order,
    };
};

export const setPage = (page) => {
    return {
        type: actionTypes.SET_PAGE,
        page,
    };
};

export const setLink = (link) => {
    return {
        type: actionTypes.SET_LINK,
        link,
    };
};

export const setToaster = (toaster) => {
    return {
        type: actionTypes.SET_TOASTER,
        toaster,
    };
};

export const upVote = (link) => {
    return {
        type: actionTypes.UP_VOTE,
        link,
    };
};

export const downVote = (link) => {
    return {
        type: actionTypes.DOWN_VOTE,
        link,
    };
};