import React from 'react';
import styled  from 'styled-components';
import HeaderStatus from './HeaderStatus';
import Buttons from './Buttons';

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

const HeaderContainer = styled.header` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px;
    margin: 32px auto 24px auto;
    background: ${props => props.theme.backgroundInvoice};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    p{
        font-weight: 500;
        color: ${props => props.theme.paragraphColor};// #888EB0;//#DFE3FA        
    }
    @media screen and (max-width: 600px){
        padding: 22px 24px;
        margin-bottom: 16px;
    }    
 `
const ButtonsResponsive = styled.div`
    width: 309px;
    @media screen and (max-width: 600px){
        display: none;
    }
 `

