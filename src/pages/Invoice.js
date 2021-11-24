import React from 'react';
import { useLocation } from 'react-router-dom';
import styled  from 'styled-components';
import Aside from '../components/Aside';
import InvoiceContainer from './../components/Invoices/InvoiceContainer';
import Buttons from '../components/Headers/InvoiceHeader/Buttons';


const Invoice = ({theme, setTheme, invoices, onUpdateForm, onClickDelete, onClickPaid,}) => {
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
                    theme = {theme} />
                <InvoiceFooter>
                    <Buttons/>
                </InvoiceFooter>
            </Container>                    
    )
}

export default Invoice;

const Container = styled.div` 
    width: 100%;
    min-height: 100vh;
    background-color: ${props=>props.theme.background};// #f2f2f2;//141625
    display: flex;
    transition: all 0.5s ease;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`
const InvoiceFooter = styled.footer`
    display: none;
    margin-top: 20px;
    @media screen and (max-width: 600px){
        width: 100%;
        background: ${props => props.theme.backgroundInvoice};
        padding: 24px 8%;            
        display: inline-block;
    }
`