import React from 'react';
import DeleteButtons  from '../components/Buttons/DeleteButtons';
import{ MessageContainer } from './ModalDeleteStyle';
import{ ModalContainer } from './ModalStyle';

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

