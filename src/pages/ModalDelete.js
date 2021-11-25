import React from 'react';
import styled  from 'styled-components';
import DeleteButtons  from '../components/Buttons/DeleteButtons';

const ModalDelete = ({invoiceId,deleteInvoice, onCancelDelete}) => {
    return(
        <ModalContainer>
            <MessageContainer>
                <h1>Confirm Deletion</h1>
                <p>Are you sure you want to delete invoice {invoiceId} ? 
                This action cannot be undone.</p>
                <DeleteButtons onCancelDelete = {onCancelDelete} deleteInvoice = {deleteInvoice}/>
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
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    
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
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    background-color:${props => props.theme.backgroundInvoice};
    border-radius: 8px;
    h1{
        color: ${props => props.theme.titleColor};
        margin-bottom: 13px;
        font-size: 24px;
        line-height: 32px;    
    }
    p{
        color: ${props => props.theme.paragraphInvoice};
        margin-bottom: 16px;
    }
    @media screen and (max-width:600px){
        width: 327px;
        height: 220px;
        padding: 32px;
        h1{
            margin-bottom: 8px;
        }
        p{
            margin-bottom: 24px;
        }
    }
    
`