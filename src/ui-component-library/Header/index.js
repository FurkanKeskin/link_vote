import React from "react";
import { css } from 'styled-components/macro';

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
        <span css={css`color: #949494;`}>hepsiburada</span>
        <span css={css`color: #666;`}>.com</span>
      </h3>
      <h4 css={css`align-self: flex-end; font-size: 25px;`}>
        <span css={css`color: #000; font-weight: 800;`}>Link</span>
        <span css={css`color: #585858; letter-spacing: 3px; font-weight: 400;`}>VOTE</span>
        <span css={css`color: #373737;`}> Challenge</span>
      </h4>
    </header>
  );
};

export default Header;
