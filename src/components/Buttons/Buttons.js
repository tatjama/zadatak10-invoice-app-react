import React from 'react';

import { ButtonsContainerForThree, ButtonCancelStyle, ButtonDeleteStyle } from './ButtonsGlobalStyle';

const Buttons = ({invoice, onClickEdit, onClickDelete, onClickPaid }) => {

    return(
        <ButtonsContainerForThree>
            <ButtonCancelStyle onClick = {onClickEdit}>Edit</ButtonCancelStyle>
            <ButtonDeleteStyle onClick = {() => onClickDelete(invoice.id)} >Delete</ButtonDeleteStyle>
            <button onClick = {() => onClickPaid(invoice.id)} >Mark as Paid</button>
        </ButtonsContainerForThree>  
    )
}

export default Buttons;

