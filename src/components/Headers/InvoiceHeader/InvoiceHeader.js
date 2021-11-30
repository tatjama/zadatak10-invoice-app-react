import React from 'react';
import HeaderStatus from './HeaderStatus';
import Buttons from '../../Buttons/Buttons';

import { HeaderContainer, ButtonsResponsive }  from './InvoiceHeaderStyle';

const InvoiceHeader = ({invoice, onClickEdit,  onClickDelete, onClickPaid, status}) => {

    return(
        <HeaderContainer>
            <HeaderStatus status = {status}/>
            <ButtonsResponsive>
                <Buttons invoice = {invoice} onClickEdit = {onClickEdit}  onClickDelete = {onClickDelete} onClickPaid = {onClickPaid}/>         
            </ButtonsResponsive>    
        </HeaderContainer>
    )
}

export default InvoiceHeader;

