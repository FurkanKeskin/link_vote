import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { TOASTER_STATUS, TOASTER_DELAY } from "../../constants/constants";
import { css } from "styled-components/macro";

const Toaster = (props) => {
    const [show, setShow] = useState(true);
    return (
        <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={props.delay || TOASTER_DELAY}
            autohide
        >
            <Toast.Body>
                <h4 css={css`
                            display: inline;
                            text-transform: uppercase;
                            color: ${props.toaster.toasterType === TOASTER_STATUS.ERROR ? '#f00' : '#008000;'}
                        `}
                >
                    {props.toaster.linkName}
                </h4>
                <p css={css`
                            display: inline;
                            color: ${props.toaster.toasterType === TOASTER_STATUS.ERROR ? '#f00' : '#008000;'}
                        `}
                >
                    {"  " + props.toaster.message}
                </p>
            </Toast.Body>
        </Toast>
    );
};

export default Toaster;