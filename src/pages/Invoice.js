import React from 'react';
import { useLocation } from 'react-router-dom';
import Aside from '../components/Aside';
import InvoiceContainer from './../components/Invoices/InvoiceContainer';

import { Container } from './InvoiceStyle';

const Invoice = ({theme, setTheme, deleteInvoice, invoices, onUpdateForm, onClickDelete, onClickPaid,}) => {
    const location = useLocation();
    const invoiceId = location.pathname.split('/')[2];
    const invoice = invoices.filter(item => item.id === invoiceId)[0];
        
    return(
            <Container  >
                <Aside theme = {theme} setTheme={setTheme} />            
                <InvoiceContainer 
                    invoice = { invoice } 
                    invoices = { invoices }
                    onClickDelete = { onClickDelete}
                    onClickPaid = { onClickPaid}
                    onUpdateForm = {onUpdateForm}
                    deleteInvoice = {() => deleteInvoice(invoiceId)}
                    theme = {theme} />                
            </Container>                    
    )
}

export default Invoice;

