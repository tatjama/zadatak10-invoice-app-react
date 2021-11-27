import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, InvoiceFooter } from './InvoiceStyle'
import Aside from '../components/Aside';
import InvoiceContainer from './../components/Invoices/InvoiceContainer';
import Buttons from '../components/Buttons/Buttons';


const Invoice = ({theme, setTheme, deleteInvoice, invoices, onUpdateForm, onClickDelete, onClickPaid,}) => {
    const location = useLocation();
    const invoiceId = location.pathname.split('/')[2];
    const invoice = invoices.filter(item => item.id === invoiceId)[0];
        
console.log(invoices)
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
                <InvoiceFooter>
                    <Buttons/>
                </InvoiceFooter>
            </Container>                    
    )
}

export default Invoice;

