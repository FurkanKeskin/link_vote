import React from "react";
import "./index.css";
import { css } from 'styled-components/macro';

const Button = (props) => {
    const clickHandler = () => {
        props.onClick();
    };
    return (
        <button
            css={css`
                width: 120px;
                height: 40px;
                background-color: #000;
                color: #ffffff;
                font-size: 20px;
                font-weight: 700;
                border-radius: 40px;
                border-style: none;
                outline: none;
                outline-width: 0;
                outline-style: none;
                outline-color: none;
                `}
            id="button-testid"
            className={`app-button ${props.disabled ? "disable" : ""}`}
            onClick={clickHandler}
            disabled={props.disabled}>
            {props.name}
        </button>
    );
};

export default Button;
