import React, { useContext } from "react";
import { List, Pagination } from "./components";
import Toaster from "../../ui-component-library/Toaster";
import { store } from "../../store/reducers";
import { css } from "styled-components/macro";

const ListView = (props) => {
    const {
        state: {
            links,
            page: { pageIndex, pageCount, totalItemCount },
            toaster,
        },
    } = useContext(store);

    return (
        <div css={css`max-width: 500px; margin: 0 auto;`} >
            {toaster.show && <Toaster toaster={toaster} />}
            <div css={css`padding: 25px;`}>
                <List />
            </div>
            {links.length > 0 && (
                <div css={css`display: flex; justify-content: center;`}>
                    <Pagination
                        totalItemCount={totalItemCount}
                        pageIndex={pageIndex}
                        pageCount={pageCount}
                    ></Pagination>
                </div>
            )}
        </div>
    );
};

export default ListView;