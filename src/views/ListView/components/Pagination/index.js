import React, { useState, useEffect, useContext } from "react";
import Pager from "react-bootstrap/Pagination";
import { store } from "../../../../store/reducers";
import { setPage } from "../../../../store/actions";
import propTypes from "prop-types";

const Pagination = (props) => {
    const context = useContext(store);
    const { dispatch } = context;
    const [pages, setPages] = useState([]);

    useEffect(() => {
        fillPagesArray();
    }, [props.totalItemCount]);

    const getTotalPageCount = () => {
        console.log(props);
        return Math.ceil(props.totalItemCount / props.pageCount);
    };

    const fillPagesArray = () => {
        const totalPageCount = getTotalPageCount();
        console.log("bu sefer olsun" + totalPageCount);
        const calculatedPages = [];
        for (let pageIndex = 1; pageIndex <= totalPageCount; pageIndex++) {
            calculatedPages.push(pageIndex);
        }
        setPages(calculatedPages);
    };

    const pageChangeHandler = (pageIndex) => {
        dispatch(setPage(pageIndex));
    };

    const pagesHtml = pages.map((pageIndex) => {
        return (
            <Pager.Item
                active={pageIndex === props.pageIndex}
                key={pageIndex}
                onClick={pageChangeHandler.bind(null, pageIndex)}
            >
                {pageIndex}
            </Pager.Item>
        );
    });

    return (
        <Pager>
            <Pager.Prev
                disabled={props.pageIndex === 1}
                onClick={pageChangeHandler.bind(null, props.pageIndex - 1)}
            />
            {pagesHtml}
            <Pager.Next
                disabled={props.pageIndex * props.pageCount >= props.totalItemCount}
                onClick={pageChangeHandler.bind(null, props.pageIndex + 1)}
            />
        </Pager>
    );
};

Pagination.propTypes = {
    totalItemCount: propTypes.number,
    pageIndex: propTypes.number,
    pageCount: propTypes.number,
};

Pagination.defaultProps = {
    totalItemCount: 0,
    pageIndex: 1,
    pageCount: 3,
};

export default Pagination;