import React from "react";
import { css } from 'styled-components/macro';
import { HEPSIBURADA, DOMAIN, BOLD_TYPED, SLIM_TYPED, DEFAULT_TYPED } from "../../constants/messageConstants";
const Header = () => {
  return (
    <header css={css`
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                border-bottom: 1px solid;
                padding: 20px 0 10px 0;`
    }>
      <h3 css={css`
              align-self: flex-end;
              font-size: 50px;
              font-weight: 700;
              letter-spacing: -2px;`
      }>
        <span css={css`color: #949494;`}>{HEPSIBURADA}</span>
        <span css={css`color: #666;`}>{DOMAIN}</span>
      </h3>
      <h4 css={css`align-self: flex-end; font-size: 25px;`}>
        <span css={css`color: #000; font-weight: 800;`}>{BOLD_TYPED}</span>
        <span css={css`color: #585858; letter-spacing: 3px; font-weight: 400;`}>{SLIM_TYPED}</span>
        <span css={css`color: #373737;`}> {DEFAULT_TYPED}</span>
      </h4>
    </header>
  );
};

export default Header;
