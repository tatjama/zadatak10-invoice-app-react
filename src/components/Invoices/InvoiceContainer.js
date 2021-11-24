import React, { useState } from 'react';
import styled  from 'styled-components';
import InvoiceDetail from './InvoiceDetail';
import InvoiceHeader from '../Headers/InvoiceHeader/InvoiceHeader';
import GoBack from '../GoBack';
import ModalEdit from '../../pages/ModalEdit';
import ModalDelete from '../../pages/ModalDelete';
import { useNavigate } from 'react-router-dom';

const InvoiceContainer = ({invoice, invoices, onClickDelete, onClickPaid, onUpdateForm, theme}) => {
   const [isEditForm, setIsEditForm ] = useState(false);
   const [isUpdate, setIsUpdate] = useState(false); 
   const [isDeleteModal, setIsDeleteModal] = useState(false);
   const [ deleteId, setDeleteId] = useState('');
   const navigate = useNavigate();

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
            {//!invoice?  navigate('/'): 
            (isUpdate || !isEditForm) ? 
            isDeleteModal? <>
                <MainContainer>
                     <GoBack/>
                    <InvoiceHeader invoice = { invoice} onClickEdit = {handleOnClickEdit}  
                    onClickDelete = {(invoiceId) => onClickDeleteOpenModal(invoiceId)} 
                    onClickPaid = {onClickPaid} status = {invoice.status}/>  
                    <InvoiceDetail invoice = {invoice}/>              
               </MainContainer>
                <ModalDelete invoiceId = {deleteId}/>
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
                       <ModalEdit invoice = {invoice}  onUpdateForm = {onUpdateForm} handleGoBack = {onGoBack}/>
                   </>
                   }
            
                        
        </Container>
    )
}

export default InvoiceContainer;

const MainContainer = styled.main`
    width: 51%;
    margin: 64px auto;
    position : relative;
        
    @media screen and (max-width: 1200px) {
        width: 70%;
    }
    @media screen and (max-width: 1000px) {
        width: 88%;
        margin: 56px auto;
    }
    @media screen and (max-width: 600px) {
       margin: 32px auto;
    }
`
const Container = styled.div` 
    width: 100%;
    min-height: 100vh;
    background-color: ${props=>props.theme.background};// #f2f2f2;//141625
    display: flex;
    transition: all 0.5s ease;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;
