import  { useState, useEffect } from 'react';
import data from '../util/data.json';

const useService = () => {
    const initialInvoices = () => JSON.parse(localStorage.getItem("invoices")) || data
    const [invoices, setInvoices ] = useState(initialInvoices());

    useEffect(() =>{
        localStorage.setItem("invoices", JSON.stringify(invoices))
      },[invoices])
  
    
    const setInvoicesOnSubmitForm = (value) => {
        let tempInvoices = [...invoices];
            tempInvoices.push(value);
            setInvoices(tempInvoices);
      }
  
      const setInvoicesOnUpdateForm = (updatedInvoice) => {
        let tempInvoices = [...invoices];
        let filteredInvoices = tempInvoices.filter(invoice => invoice.id !== updatedInvoice.id);
        filteredInvoices.push(updatedInvoice);
        setInvoices(filteredInvoices);
      }
  
      const setInvoicesOnDeleteInvoice = (invoiceId) => {
        let tempInvoices = [...invoices];
        let filteredInvoices = tempInvoices.filter(invoices => invoices.id !== invoiceId);
        setInvoices(filteredInvoices);
      }
  
      const setInvoicesOnUpdateStatus = (invoiceId) => {
        let tempInvoices = [...invoices];
        let filteredInvoices = tempInvoices.filter(invoices => invoices.id !== invoiceId);
        let paidInvoice = tempInvoices.filter(invoices => invoices.id === invoiceId)[0];
        paidInvoice.status = 'paid';
        filteredInvoices.push(paidInvoice);
        setInvoices(filteredInvoices);
      }
  
      return {invoices, setInvoicesOnSubmitForm, setInvoicesOnUpdateForm, setInvoicesOnDeleteInvoice, setInvoicesOnUpdateStatus }
}
 
export default useService;