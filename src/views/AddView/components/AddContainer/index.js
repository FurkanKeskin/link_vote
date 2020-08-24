import React, { useContext } from 'react';
import { css } from 'styled-components/macro';
import { Arrow } from '../../../../ui-component-library';
import { Toaster } from '../../../../ui-component-library';
import AddForm from './AddForm'
import { store } from "../../../../store/reducers";
import { NavLink } from "react-router-dom";
import { RETURN_TO_LIST } from "../../../../constants/messageConstants";

const AddViewContainer = (props) => {
    const context = useContext(store);
    const { state: { toaster }, } = context;

    return (
        <div css={css`
                    position: relative;
                    max-width: 500px;
                    margin: 0 auto;`
        }>
            {toaster.show && <Toaster toaster={toaster} /> }
            <div css={`padding: 30px 0px;`}>
                <NavLink css={css`color: #000; font-weight: 600;`} to="/home" exact>
                <Arrow width="20" height="20" fill="#000" rotateDeg="0" />
                    {RETURN_TO_LIST}
                </NavLink>
            </div>
            <AddForm />
        </div>
    );
};

export default AddViewContainer;