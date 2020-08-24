import { SORT_ORDER, LOCALSTORAGE_LINK_KEY } from "./constants/constants";
import { v4 as uuid } from "uuid";

const storage = localStorage;

export const sortLinks = (links, order) => {
    const sortedLinks = links.sort((a, b) => {
        if (order === SORT_ORDER.DESC) {
            return b.points - a.points || b.updatedAt - a.updatedAt;
        }
        return a.points - b.points || b.updatedAt - a.updatedAt;
    });
    return sortedLinks;
};

export const paginateLinks = (links, pageIndex, pageCount) => {
    const index = pageIndex - 1;
    const paginatedLinks = links.slice (index * pageCount, index * pageCount + pageCount);
    return paginatedLinks;
}

export const getLinks = () => {
    return JSON.parse(storage.getItem(LOCALSTORAGE_LINK_KEY)) || [];
};
export const totalLinkCount = () => {
    const links = getLinks();
    return links.length;
  };
export const addLinkToStore = (link) => {
    const newLink = {
        id: uuid(),
        name: link.name,
        url: link.url,
        points: 0,
        updatedAt: null,
    };
    const links = getLinks();
    links.push(newLink);
    setLinks(links);
    return newLink;
};

export const removeLink = (linkId) => {
    let links = getLinks();
    const linkToDelete = links.find((link) => link.id === linkId);
    links = links.filter((link) => link.id !== linkToDelete.id);
    setLinks(links);
    return linkToDelete;
}

export const upVoteLink = (linkToUp) => {
    const links = getLinks();
    const upVotedLink = links.find((link) => link.id === linkToUp.id);
    upVotedLink.points++;
    upVotedLink.updatedAt = new Date().getTime();
    setLinks(links);
    return upVotedLink;
}

export const downVoteLink = (linkToDown) => {
    const links = getLinks();
    const downVotedLink = links.find((link) => link.id === linkToDown.id);
    downVotedLink.points--;
    downVotedLink.updatedAt = new Date().getTime();
    setLinks(links);
    return downVotedLink;
}

const setLinks = (links) => {
    const formattedLinks = JSON.stringify(links);
    storage.setItem(LOCALSTORAGE_LINK_KEY, formattedLinks);
};
