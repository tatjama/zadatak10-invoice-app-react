import React, { useState } from 'react';
import styled  from 'styled-components';
import InvoiceDetail from './InvoiceDetail';
import InvoiceHeader from '../Headers/InvoiceHeader/InvoiceHeader';
import GoBack from '../GoBack';
import ModalEdit from '../../pages/ModalEdit';

const InvoiceContainer = ({invoice, invoices, onUpdateForm, theme}) => {
   const [isEditForm, setIsEditForm ] = useState(false);
   const[isUpdate, setIsUpdate] = useState(false); 

    const handleOnClickEdit = () => {
        setIsEditForm(true);
        setIsUpdate(false);
    }
    const onGoBack = () => {
        setIsEditForm(false);
        setIsUpdate(true);
    }
    return(
        <Container>
            { (isUpdate || !isEditForm) ? 
             <MainContainer>
             <GoBack/>
             <InvoiceHeader onClickEdit = {handleOnClickEdit} status = {invoice.status}/>  
             <InvoiceDetail invoice = {invoice}/>              
            </MainContainer>
        
            : <>  <MainContainer>
                    <GoBack/>
                    <InvoiceHeader onClickEdit = {handleOnClickEdit} status = {invoice.status}/>  
                    <InvoiceDetail invoice = {invoice}/>              
                </MainContainer> 
                    <ModalEdit invoice = {invoice} initialInvoices = { invoices } onUpdateForm = {onUpdateForm} handleGoBack = {onGoBack}/>
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
