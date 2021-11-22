import React from 'react';
import styled  from 'styled-components';
import InvoiceDetail from './InvoiceDetail';
import InvoiceHeader from '../Headers/InvoiceHeader/InvoiceHeader';
import GoBack from '../GoBack';
import data from '../../data.json';

const InvoiceContainer = ({invoiceId, theme}) => {
    const invoice = data.filter(item => item.id === invoiceId)[0];
    return(
        <MainContainer>
            <GoBack/>
            <InvoiceHeader status = {invoice.status}/>
            <InvoiceDetail invoice = {invoice}/>            
        </MainContainer>
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
