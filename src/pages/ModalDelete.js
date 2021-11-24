import React, {useState, useRef } from 'react';
import styled  from 'styled-components';
import bin  from '../assets/icon-delete.svg';
import FormButtons  from '../components/Buttons/FormButtons';
import GoBack  from '../components/GoBack';

const ModalDelete = ({invoiceId, invoice,onSubmitForm , handleGoBack}) => {
    return(
        <ModalContainer>
            <MessageContainer>
                <h1>Confirm Deletion</h1>
                <p>Are you sure you want to delete invoice {invoiceId}? 
                This action cannot be undone.</p>
            </MessageContainer>
        </ModalContainer>
    )
}

export default ModalDelete;

const ModalContainer = styled.section` 
    width: 100%;
    height: 100%;
    position: absolute;
    left: 103px;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    overflow: scroll;
    @media screen and (max-width: 1000px) {
        top: 80px;
        left: 0;
    }
    @media screen and (max-width: 600px) {
        top: 72px;
    }
`
const MessageContainer = styled.div` 
    width: 480px;
    height: 250px;
    position: absolute;
    padding: 48px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:${props => props.theme.backgroundInvoice};
    border-radius: 8px;
    h1{
        color: ${props => props.theme.titleColor}
    }
    p{
        color: ${props => props.theme.paragraphInvoice}
    }
    @media screen and (max-width:600px){
        width: 327px;
        height: 220px;
        padding: 32px;
    }
    
`