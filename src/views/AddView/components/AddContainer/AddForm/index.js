import React, { useState, useContext } from 'react';
import Form from "react-bootstrap/Form";
import { Button } from '../../../../../ui-component-library';
import { addLink, setToaster } from '../../../../../store/actions';
import { TOASTER_DELAY } from '../../../../../constants/constants';
import { ADD_NEW_LINK, LINK_NAME, LINK_URL } from '../../../../../constants/messageConstants';
import { store } from '../../../../../store/reducers';
import { addLinkToStore } from '../../../../../helper';
import { css } from "styled-components/macro";

const AddForm = (props) => {
    const context = useContext(store);
    const { dispatch } = context;
    const [name, setName] = useState("");
    const [url, setUrl] = useState('');

    const nameChangeHandler = e => setName(e.target.value);
    const urlChangeHandler = e => setUrl(e.target.value);
    const addLinkHandler = () => {
        const newLink = {
            name: name,
            url: url,
        };
        const addedLink = addLinkToStore(newLink);
        dispatch(addLink(addedLink));
        clearForm();
        setTimeout(() => {
            dispatch(
                setToaster({
                    show: false,
                })
            );
        }, TOASTER_DELAY);
    };
    const clearForm = () => {
        setName("");
        setUrl("");
    };

    return (
        <div>
            <h2 css={css`padding: 0 0 20px 0;`}>{ADD_NEW_LINK}</h2>
            <Form>
                <Form.Group>
                    <Form.Label>{LINK_NAME}</Form.Label>
                    <Form.Control type="text" placeholder="e.g. Alphabet" onChange={nameChangeHandler} size="lg" value={name} css={css`cursor: initial;`} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>{LINK_URL}</Form.Label>
                    <Form.Control type="text" placeholder="e.g. http://abc.xyz" onChange={urlChangeHandler} size="lg" value={url} css={css`cursor: initial;`} />
                </Form.Group>
                <Form.Group css={css`position: absolute; right: 0;`}>
                    <Button name="ADD" onClick={addLinkHandler} disabled={!name || !url} />
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddForm;