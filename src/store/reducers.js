import React, { useReducer, createContext } from "react";
import { SORT_ORDER, TOASTER_STATUS } from "../constants/constants";
import * as actionTypes from "./types";

const initialState = {
    links: [],
    order: SORT_ORDER.DEFAULT,
    page: {
        pageIndex: 1,
        pageCount: 5,
        totalItemCount: 0,
    },
    link: {
        id: undefined,
        name: "",
        url: "",
        points: 0,
        updatedAt: undefined,
    },
    linkToUpdate: undefined,
    toaster: {
        show: false,
        linkName: "",
        message: "",
        toasterStatus: TOASTER_STATUS.SUCCESS,
    },
};

const store = createContext(initialState);
const { Provider } = store;

const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state = initialState, action) => {
        switch (action.type) {
            case actionTypes.GET_LINKS:
                const totalItemCount = action.totalItemCount;
                return {
                    ...state,
                    links: action.links,
                    page: { ...state.page, totalItemCount}
                };
            case actionTypes.ADD_LINK:
                return {
                    ...state,
                    link: action.addedLink,
                    toaster: {
                        show: true,
                        linkName: action.addedLink.name,
                        message: "added.",
                        toasterStatus: TOASTER_STATUS.SUCCESS,
                    },
                };
            case actionTypes.DELETE_LINK:
                let pageIndex = state.page.pageIndex;
                if (state.links.length === 1) {
                    pageIndex--;
                }
                return {
                    ...state,
                    links: [...state.links.filter((link) => link.id !== action.link.id)],
                    toaster: {
                        show: true,
                        linkName: action.link.name,
                        message: "removed.",
                        toasterStatus: TOASTER_STATUS.SUCCESS,
                    },
                    page: { ...state.page, pageIndex },
                };
            case actionTypes.SET_ORDER:
                return {
                    ...state,
                    order: action.order,
                };
            case actionTypes.SET_PAGE:
                return {
                    ...state,
                    page: { ...state.page, pageIndex: action.page },
                };
            case actionTypes.SET_LINK:
                return {
                    ...state,
                    link: action.link,
                };
            case actionTypes.SET_TOASTER:
                return {
                    ...state,
                    toaster: action.toaster,
                };
            case actionTypes.UP_VOTE:
                return {
                    ...state,
                    links: [...state.links.filter((link) => link.id !== action.link.id), action.link],
                    linkToUpdate: action.link,
                };
            case actionTypes.DOWN_VOTE:
                return {
                    ...state,
                    links: [...state.links.filter((link) => link.id !== action.link.id), action.link],
                    linkToUpdate: action.link,
                };
            default:
                return state;
        }
    }, initialState);

return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, GlobalStateProvider };