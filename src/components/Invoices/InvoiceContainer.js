import React, { useState } from 'react';
import InvoiceDetail from './InvoiceDetail';
import InvoiceHeader from '../Headers/InvoiceHeader/InvoiceHeader';
import GoBack from '../GoBack';
import ModalEdit from '../../pages/ModalEdit';
import ModalDelete from '../../pages/ModalDelete';

import { Container, MainContainer } from './InvoiceContainerStyle';

const InvoiceContainer = ({invoice, deleteInvoice, onClickPaid, onUpdateForm}) => {
   const [isEditForm, setIsEditForm ] = useState(false);
   const [isUpdate, setIsUpdate] = useState(false); 
   const [isDeleteModal, setIsDeleteModal] = useState(false);
   const [ deleteId, setDeleteId] = useState('');

    const handleOnClickEdit = () => {
        setIsEditForm(true);
        setIsUpdate(false);
    }
    const onGoBack = () => {
        setIsEditForm(false);
        setIsUpdate(true);
    }
    const onClickDeleteOpenModal = (invoiceId) => {
        setIsDeleteModal(true)
        setDeleteId(invoiceId);
    }
    return(
        <Container>
            { (isUpdate || !isEditForm) ? 
            isDeleteModal? <>
                <MainContainer>
                     <GoBack/>
                    <InvoiceHeader invoice = { invoice} onClickEdit = {handleOnClickEdit}  
                    onClickDelete = {(invoiceId) => onClickDeleteOpenModal(invoiceId)} 
                    onClickPaid = {onClickPaid} status = {invoice.status}/>  
                    <InvoiceDetail invoice = {invoice}/>              
               </MainContainer>
                <ModalDelete invoiceId = {deleteId} onCancelDelete = {() => setIsDeleteModal(false)} deleteInvoice = {deleteInvoice}/>
                </>:
                <MainContainer>
                    <GoBack/>
                    <InvoiceHeader invoice = { invoice} onClickEdit = {handleOnClickEdit}  
                    onClickDelete = {(invoiceId) => onClickDeleteOpenModal(invoiceId)} 
                    onClickPaid = {onClickPaid} status = {invoice.status}/>  
                    <InvoiceDetail invoice = {invoice}/>              
               </MainContainer>
                
               : <>  <MainContainer>
                       <GoBack/>
                       <InvoiceHeader onClickEdit = {handleOnClickEdit} status = {invoice.status}/>  
                       <InvoiceDetail invoice = {invoice}/>              
                   </MainContainer> 
                       <ModalEdit invoice = {invoice}  onSubmitForm = {onUpdateForm} handleGoBack = {onGoBack}/>
                   </>
                   }
            
                        
        </Container>
    )
}

export default InvoiceContainer;

