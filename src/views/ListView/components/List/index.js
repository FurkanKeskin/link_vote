import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { TOASTER_DELAY } from "../../../../constants/constants";
import { Popup, Button } from "../../../../ui-component-library";
import { ListElement, Submit, Filter } from "./components/";
import { store } from "../../../../store/reducers";
import { setToaster, setOrder, getLinksAction, deleteLink, upVote, downVote } from "../../../../store/actions";
import { getLinks, removeLink, upVoteLink, downVoteLink, sortLinks, paginateLinks } from "../../../../helper";
import { css } from "styled-components/macro";

export const List = (props) => {
    const context = useContext(store);
    const {
        dispatch,
        state: { links, order, page, linkToUpdate },
    } = context;
    const [linkToDelete, setLinkToDelete] = useState();
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
        const links = getLinks();
        const sortedLinks = sortLinks(links, order);
        const paginatedLinks = paginateLinks(
            sortedLinks,
            page.pageIndex,
            page.pageCount
        );
        dispatch(getLinksAction({ links: paginatedLinks, totalItemCount: links.length })
        );
    }, [dispatch, links.length, page.pageIndex, page.pageCount, order, linkToUpdate]);


    const navigateToAddView = () => {
        props.history.push("./add-link");
    };
    const upVoteIsClicked = link => {
        const upVotedLink = upVoteLink(link);
        dispatch(upVote(upVotedLink));
    };
    const downVoteIsClicked = link => {
        const downVotedLink = downVoteLink(link);
        dispatch(downVote(downVotedLink));
    };
    const deleteIconIsClicked = link => {
        setLinkToDelete(link);
        popConfirmUp();
    };

    const popConfirmUp = () => setShowConfirm(true);
    const popConfirmClose = () => setShowConfirm(false);

    const confirmHandler = () => {
        const deletedLink = removeLink(linkToDelete.id);
        dispatch(deleteLink({ link: deletedLink }));
        popConfirmClose();
        setTimeout(() => {
            dispatch(
                setToaster({
                    show: false,
                })
            );
        }, TOASTER_DELAY);
    };

    const sortHandler = order => dispatch(setOrder(order));

    const ListElements = links && links.map((link) => {
        return (
            <ListElement
                key={link.id}
                link={link}
                squareText={link.points}
                deleteIconIsClicked={deleteIconIsClicked.bind(null, link)}
                upVoteIsClicked={upVoteIsClicked.bind(null, link)}
                downVoteIsClicked={downVoteIsClicked.bind(null, link)}
                cursor="pointer"
            />
        );
    });

    const ConfirmDialogueBody = (
        <>
            <p css={css`font-size: 20px; font-weight: 400; color: #585858; text-align: center; margin: 0;`}>Do you want to remove:</p>
            <div css={css`font-weight: 700; text-align: center; margin: 0; font-size: 3rem; `}>
                {linkToDelete && linkToDelete.name}
            </div>
        </>
    );

    const ConfirmDialogueFooter = (
        <>
            <Button name="OK" onClick={confirmHandler}></Button>
            <Button name="Cancel" onClick={popConfirmClose}></Button>
        </>
    );

    return (
        <>
            <ul css={css`list-style-type: none;  display: flex;  flex-direction: column;  padding: 0;`}>
                <Submit onSubmitNewLink={navigateToAddView} />
                <li css={
                    css`display: flex;
                        justify-content: flex-start;
                        position: relative;
                        padding: 7px;
                        border-radius: 5px;
                        border-top: 3px solid #ececec;
                        padding-top: 15px;
                    `}>
                    {links.length > 0 && (
                        <Filter sortSelection={sortHandler} />
                    )}
                </li>
                {ListElements}
            </ul>
            {showConfirm && (
                <Popup show={showConfirm} title="Remove Link" body={ConfirmDialogueBody} footer={ConfirmDialogueFooter} onClosePopup={popConfirmClose} />
            )}

        </>
    );
};

export default withRouter(List);