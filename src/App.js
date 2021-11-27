import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import {   ThemeProvider } from 'styled-components';
import { themes } from './theme/Theme';
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import data from './util/data.json';


function App() {  
  const initialInvoices = () => JSON.parse(localStorage.getItem("invoices")) || data
  const [invoices, setInvoices ] = useState(initialInvoices());
  const [theme, setTheme] = useState("light");

    
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

    return (
      <ThemeProvider theme = { themes[theme] } >     
        <Router>   
          <Routes>
            <Route name="home" 
              exact path="/" 
              element = {<Home 
                      invoices = {invoices} 
                      theme = { theme } 
                      onSubmitForm = {(value) => setInvoicesOnSubmitForm(value) }
                      setTheme = { setTheme }/> }
            />
            <Route name="invoice" 
              path="/invoice/:id" 
              element = {<Invoice 
                      invoices = { invoices } 
                      onUpdateForm = { (updatedInvoice) => setInvoicesOnUpdateForm(updatedInvoice)}
                      onClickDelete = { (invoiceId) => setInvoicesOnDeleteInvoice(invoiceId)}
                      onClickPaid = {(invoiceId) => setInvoicesOnUpdateStatus(invoiceId)}
                      deleteInvoice = { (invoiceId) => setInvoicesOnDeleteInvoice(invoiceId)}
                      theme = { theme } 
                      setTheme = { setTheme }/>}
            />
           
          </Routes>   
         </Router>
      </ThemeProvider>
  );
}

export default App;
